"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/" },
    { name: "LinkedIn", url: "https://linkedin.com/" },
    { name: "Twitter", url: "https://twitter.com/" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <motion.div
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">MyPortfolio</div>

        {/* Navigation */}
        <div className="flex gap-6">
          <a href="#about" className="hover:text-gray-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-gray-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-10 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </motion.div>
    </footer>
  );
}
