"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const frontendSkills = [
    "Next.js",
    "Vite.js",
    "Angular.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ];
  const backendSkills = ["Express.js", "Java", "Nest.js"];
  const databaseSkills = ["Firebase", "SQL", "MongoDB"];

  const renderSkills = (skills: string[]) =>
    skills.map((skill, index) => (
      <motion.div
        key={skill}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Badge className="m-1 px-3 py-1 text-sm">{skill}</Badge>
      </motion.div>
    ));

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-24 bg-gray-50">
      <motion.div
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-6"
        initial="hidden"
        animate="visible"
      >
        {/* Frontend Skills */}
        <motion.div variants={cardVariants}>
          <Card className="shadow-lg hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap">
              {renderSkills(frontendSkills)}
            </CardContent>
          </Card>
        </motion.div>

        {/* Backend Skills */}
        <motion.div variants={cardVariants} transition={{ delay: 0.2 }}>
          <Card className="shadow-lg hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle>Backend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap">
              {renderSkills(backendSkills)}
            </CardContent>
          </Card>
        </motion.div>

        {/* Database Skills */}
        <motion.div variants={cardVariants} transition={{ delay: 0.4 }}>
          <Card className="shadow-lg hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle>Database</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap">
              {renderSkills(databaseSkills)}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
