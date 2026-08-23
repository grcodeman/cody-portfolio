import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center space-y-2">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        This site uses Microsoft Clarity for analytics and heatmaps to improve user experience. 
        View <Link href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" className="text-indigo-600 dark:text-indigo-400 underline">Microsoft&apos;s Privacy Statement</Link>.
      </p>
      <p className="text-gray-600 dark:text-gray-400">© 2026 Cody Thornell</p>
    </footer>
  );
}
