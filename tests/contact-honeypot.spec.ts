import { test, expect, Page } from "@playwright/test";

// Intercept the Formspree POST so tests never send real mail.
async function stubFormspree(page: Page) {
  const posted: Record<string, string>[] = [];
  await page.route("**formspree.io/**", async (route) => {
    const data = route.request().postData() ?? "";
    posted.push(Object.fromEntries(new URLSearchParams(data)));
    await route.fulfill({ status: 200, contentType: "text/html", body: "ok" });
  });
  return posted;
}

async function fillHumanFields(page: Page) {
  await page.fill("#email", "human@example.com");
  await page.fill("#name", "Real Human");
  await page.fill("#message", "hello");
}

test.beforeEach(async ({ page }) => {
  await page.goto("/contact");
});

test("honeypot is invisible and unreachable for humans", async ({ page }) => {
  const pot = page.locator('input[name="_gotcha"]');
  await expect(pot).toHaveCount(1);
  await expect(pot).toHaveValue("");

  // Rendered off-screen, not display:none (bots skip display:none).
  const box = await pot.boundingBox();
  expect(box, "honeypot should still be laid out").not.toBeNull();
  expect(box!.x + box!.width).toBeLessThan(0);

  // Hidden from assistive tech.
  await expect(pot.locator("xpath=ancestor::*[@aria-hidden='true']")).toHaveCount(1);

  // Keyboard tab order skips it: message -> submit button.
  await page.focus("#message");
  await page.keyboard.press("Tab");
  await expect(page.locator('button[type="submit"]')).toBeFocused();

  // And it doesn't push the page sideways.
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow, "honeypot must not cause horizontal scroll").toBe(false);
});

test("human submission sends an empty _gotcha", async ({ page }) => {
  const posted = await stubFormspree(page);
  await fillHumanFields(page);
  await page.click('button[type="submit"]');
  await expect.poll(() => posted.length).toBe(1);

  expect(posted[0].email).toBe("human@example.com");
  expect(posted[0].name).toBe("Real Human");
  expect(posted[0]._gotcha).toBe("");
});

test("bot submission carries a filled _gotcha for Formspree to drop", async ({ page }) => {
  const posted = await stubFormspree(page);
  await fillHumanFields(page);
  // Bots fill every field they find, including the hidden one.
  await page.locator('input[name="_gotcha"]').fill("http://spam.example.com", { force: true });
  await page.click('button[type="submit"]');
  await expect.poll(() => posted.length).toBe(1);

  expect(posted[0]._gotcha).toBe("http://spam.example.com");
});
