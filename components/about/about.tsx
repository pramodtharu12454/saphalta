"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-xl border-2 border-blue-500">
            <Image
              src="/photo.jpg" // 👉 Replace with your image
              alt="About Image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE ABOUT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-blue-600">Me</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            I am a passionate and creative web developer specializing in
            building modern, clean, and responsive websites. With experience in
            <strong className="text-blue-600">
              {" "}
              MERN Stack, Next.js, Tailwind CSS, and Shadcn UI
            </strong>
            , I focus on writing clean code and creating beautiful user
            experiences.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            I love solving problems, exploring new technologies, and turning
            ideas into real digital products. My goal is to build websites that
            are fast, visually appealing, and user-friendly.
          </p>

          <div className="mt-4">
            <span className="text-blue-600 font-semibold">
              ✔ 2+ Years Experience
            </span>
            <br />
            <span className="text-blue-600 font-semibold">
              ✔ MERN Stack Developer
            </span>
            <br />
            <span className="text-blue-600 font-semibold">
              ✔ UI/UX Enthusiast
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
