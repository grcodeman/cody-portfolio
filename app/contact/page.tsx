import Header from "../../components/Header";

export default function Contact() {
  return (
    <div className="text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <Header />

        <main className="space-y-8">
          <h1 className="text-4xl font-bold">Contact</h1>

          <form
            className="contact-form"
            action="https://formspree.io/f/mjkabbwk"
            method="POST"
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                required
              ></textarea>
            </div>
            {/* Honeypot: bots fill it, humans never see it. Formspree drops any
                submission where _gotcha is non-empty. */}
            <div className="absolute -left-[5000px]" aria-hidden="true">
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <button type="submit">Send message</button>
          </form>
        </main>
      </div>
    </div>
  );
}
