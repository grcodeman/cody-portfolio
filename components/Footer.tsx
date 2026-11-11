export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-xl px-4 pb-10">
      <div className="space-y-1 border-t border-gray-200 pt-6 text-xs text-gray-600 dark:border-zinc-800 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Cody Thornell</p>
        <p>
          This site uses Microsoft Clarity for analytics and heatmaps.{" "}
          <a
            href="https://privacy.microsoft.com/en-us/privacystatement"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-400 underline-offset-4 transition-colors hover:text-black hover:decoration-current dark:decoration-zinc-600 dark:hover:text-white"
          >
            Microsoft&apos;s privacy statement
          </a>
        </p>
      </div>
    </footer>
  );
}
