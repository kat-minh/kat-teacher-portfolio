"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Certifications() {
  const certifications = [
    {
      title: "CertNexus Certified Ethical Emerging Technologist",
      category: "Professional Certificate",
      image: "/certnexus-certified-ethical-emerging-technologist.png",
    },
    {
      title: "Ethics of Artificial Intelligence",
      category: "Specialization",
      image: "/ethics-of-artificial-intelligence.png",
    },
    {
      title: "Software Development Lifecycle",
      category: "Specialization",
      image: "/software-development-lifecycle.png",
    },
    {
      title: "Java Database Connectivity",
      category: "Specialization",
      image: "/java-database-connectivity.png",
    },
    {
      title: "Web Design for Everybody",
      category: "Specialization",
      image: "/web-design-for-everybody.png",
    },
    {
      title: "Object Oriented Programming in Java",
      category: "Specialization",
      image: "/object-oriented-programming-in-java.png",
    },
  ]

  return (
    <section className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-zinc-800 hover:bg-zinc-700 transition-colors">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white text-sm mb-2">{cert.title}</h3>
                    <p className="text-xs text-gray-400">{cert.category}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
