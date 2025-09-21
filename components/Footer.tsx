import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-center space-y-2">
      <p className="text-gray-500 text-sm">
        This site uses Microsoft Clarity for analytics and heatmaps to improve user experience. 
        View <Link href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Microsoft&apos;s Privacy Statement</Link>.
      </p>
      <p className="text-gray-500">© 2025 Cody Thornell</p>
    </div>
  );
}
