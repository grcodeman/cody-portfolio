"use client"

import Header from "../../components/Header";
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        
        {/* Header Section */}
        <Header />
        
        <main className="space-y-10">
          <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 0.8}}
          
          className="space-y-8"
          >
          <h1 className="text-4xl font-bold text-gradient inline-block mb-8">
            Blog
          </h1>
          
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts yet.
            </p>
            
            {/* Add your blog content here */}
          </div>

          </motion.section>
        </main>
      </div>
    </div>
  );
}
