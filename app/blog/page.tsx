export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block mb-8">
          Blog
        </h1>
        
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            No blog posts yet.
          </p>
        </div>
      </div>
    </div>
  );
}
