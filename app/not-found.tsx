import Link from "next/link";
import Header from "@/components/Header";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="text-black transition-colors duration-300 dark:text-white">
      <div className="mx-auto max-w-xl px-4 py-20">
        <Header />
        <main className="space-y-4">
          <h1 className="text-3xl font-bold text-balance sm:text-4xl">Whoops, wrong page.</h1>
          <p className="text-gray-600 dark:text-gray-400">
            This page doesn&apos;t exist or has moved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm font-medium">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-700 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              <span aria-hidden="true">&larr;</span> Back home
            </Link>
            <Link href="/projects" className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white">
              See my projects
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
