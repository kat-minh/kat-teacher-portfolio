"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "ai-projects", "iot-sensors", "microbit", "robotics"]

  const works = [
    {
      id: 1,
      title: "AI Palm Recognition",
      category: "ai-projects",
      image: "/ai-palm-recognition.jpg",
      year: "2025",
      description: "AI system recognizing hand gestures using Raspberry Pi and webcam",
      link: "https://www.youtube.com/shorts/JiseIgXWF8Q",
    },
    {
      id: 2,
      title: "Smart Weather Station",
      category: "iot-sensors",
      image: "/smart-weather-station.jpg",
      year: "2025",
      description: "IoT weather monitoring with temperature, humidity sensors",
      link: "https://www.youtube.com/shorts/dLHwvUqwcG8",
    },
    {
      id: 3,
      title: "Ultrasonic Radar",
      category: "iot-sensors",
      image: "/ultrasonic-radar.jpg",
      year: "2025",
      description: "Object detection radar using ultrasonic sensors and servo motor",
      link: "https://www.youtube.com/shorts/DZ2p5GKt7p4",
    },
    {
      id: 4,
      title: "Voice Controlled Car",
      category: "robotics",
      image: "/voice-controlled-car.jpg",
      year: "2025",
      description: "Speech recognition controlled robotic car with Raspberry Pi",
      link: "https://www.youtube.com/shorts/EZ_2hpY9tag",
    },
    {
      id: 5,
      title: "Accelerometer Detector",
      category: "microbit",
      image: "/accelerometer-detector.png",
      year: "2025",
      description: "Motion detection system using BBC Micro:bit accelerometer",
      link: "https://www.youtube.com/shorts/AAwRWlxlTwU",
    },
    {
      id: 6,
      title: "Morse Code System",
      category: "microbit",
      image: "/morse-code-system.png",
      year: "2025",
      description: "Morse code communication using BBC Micro:bit radio",
      link: "https://www.youtube.com/shorts/f5vGjIgXMG4",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default": "secondary"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-900">
                  <CardContent className="p-0">
                    <div className="group relative aspect-square">
                      <Image
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl font-semibold text-white text-center px-4">{work.title}</h3>
                        <p className="mt-2 text-sm text-gray-300 text-center px-4">{work.description}</p>
                        <p className="mt-1 text-xs text-gray-400">{work.year}</p>
                        {work.link && (
                          <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-xs text-blue-400 hover:text-blue-300"
                          >
                            View Demo →
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
