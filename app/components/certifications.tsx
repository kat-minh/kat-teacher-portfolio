"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Certifications() {
  const certifications = [
    {
      title: "CertNexus Certified Ethical Emerging Technologist",
      category: "Professional Certificate",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Ethics of Artificial Intelligence",
      category: "Specialization",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Software Development Lifecycle",
      category: "Specialization",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Java Database Connectivity",
      category: "Specialization",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Web Development & Coding",
      category: "Specialization",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Object Oriented Programming in Java",
      category: "Specialization",
      image: "/placeholder.svg?height=300&width=400",
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
                  <div className="aspect-[4/3]">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="h-full w-full object-cover"
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
