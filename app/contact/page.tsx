"use client"

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block mb-8">
            Contact
          </h1>
          
          <div className="space-y-6">
          
            <form
              className="contact-form"
              action="https://formspree.io/f/mjkabbwk"
              method="POST"
            >
              <div>
                <label htmlFor="email">Your email:</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder="your.email@example.com"
                  required 
                />
              </div>
              <div>
                <label htmlFor="name">Your name:</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder="Your full name"
                  required 
                />
              </div>
              <div>
                <label htmlFor="message">Your message:</label>
                <textarea 
                  name="message" 
                  id="message"
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>

          </motion.section>
          
          {/* Footer Section */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
