"use client"

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        
        {/* Header Section */}
        <Header />
        
        <main className="space-y-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block mb-8">
            Contact
          </h1>
          
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              Contact information and form coming soon.
            </p>
            
            {/* Add your contact content here */}
          </div>
          
          {/* Footer Section */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
