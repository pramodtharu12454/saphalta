"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioDashboard() {
  return (
    <section className="w-full min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Hi, I am <span className="text-blue-600">Saphalta Neupane</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 mt-3"
          >
            I am a{" "}
            <span className="font-semibold text-blue-600">Web Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 mt-4 text-base md:text-lg max-w-md"
          >
            I build modern, responsive web applications using
            <strong> MERN Stack, Next.js, Tailwind, and Shadcn UI</strong>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 mt-6"
          >
            <Button className="px-6 transition-transform hover:scale-105">
              Hire Me
            </Button>

            <Button
              variant="outline"
              className="px-6 transition-transform hover:scale-105"
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-2 border-blue-500"
          >
            <Image
              src="/photo.jpg"
              alt="Developer"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
