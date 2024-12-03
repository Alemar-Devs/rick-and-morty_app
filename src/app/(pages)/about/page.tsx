'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import AboutSection from '@/components/AboutSection/SeasonShowcase'
import Image from "next/image";
import { SiHbo } from "react-icons/si";
import { FaAmazon, FaPlay } from "react-icons/fa";
import Link from "next/link";

const heroImages = [
  {
    url: "https://wallpapercave.com/wp/wp2429240.png",
    title: "Welcome to the Multiverse",
  },
  {
    url: "https://wallpapercave.com/wp/wp3277757.jpg",
    title: "Infinite Dimensions",
  },
  {
    url: "https://wallpapercave.com/wp/wp2166957.jpg",
    title: "Epic Adventures",
  },
  {
    url: "https://wallpapercave.com/wp/wp3277700.jpg",
    title: "Wubba Lubba Dub Dub!",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function AboutPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  // Prevent hydration mismatch by returning a loading state
  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900" />
  }

  const bgClass = theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-[calc(100vh-4rem)] relative"
      >
        <motion.div 
          className="w-full h-full relative"
          style={{
            backgroundImage: `url(${heroImages[currentImage].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Gradiente para mejorar contraste */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" 
          />
          
          {/* Contenedor del texto */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent">
            <div className="container mx-auto px-6 py-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4
                }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              >
                Explora el Multiverso de Rick and Morty
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  bounce: 0.4
                }}
                className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              >
                Sumérgete en las aventuras interdimensionales más locas de la televisión
              </motion.p>
            </div>
          </div>

          {/* Efecto de partículas flotantes */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#5AE65A] rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: 0
                }}
                animate={{
                  y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </motion.section>

      {/* Elegant section divider */}
      <div className="relative h-24">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#5AE65A] to-transparent"
        />
      </div>

      {/* About Section with enhanced transitions */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-16 relative"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <AboutSection />
        </motion.div>
      </motion.div>

      {/* Creators Section with refined transitions */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-full min-h-screen relative flex items-center justify-center py-20 bg-black overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div 
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(90, 230, 90, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(90, 230, 90, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(90, 230, 90, 0.05) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
        {/* Fondo con gradiente */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        </div>

        <div className="relative z-10 w-full px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-[#5AE65A] font-['Comic Sans MS'] text-center">
            Los Genios Detrás de Rick and Morty
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-[90%] mx-auto">
            {/* Justin Roiland */}
            <div className="w-full md:w-1/3 space-y-6">
              <h3 className="text-2xl font-semibold text-[#5AE65A]">Justin Roiland</h3>
              <p className="text-xl leading-relaxed text-right text-gray-300">
                Co-creador y voz original de Rick y Morty. Nacido en Stockton, California. 
                Animador, escritor y actor de voz conocido por su trabajo en Channel 101 y 
                House of Cosbys. Su estilo único de improvisación y humor absurdo ayudó a 
                definir la voz distintiva de la serie.
              </p>
              <Link
                href="https://twitter.com/JustinRoiland"
                target="_blank"
                className="inline-flex items-center gap-2 text-[#5AE65A] hover:text-[#5AE65A]/80 transition-colors justify-end w-full text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span>@JustinRoiland</span>
              </Link>
            </div>

            {/* Central Image with Glow Effect */}
            <div className="w-full md:w-1/3 relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 -m-8 bg-[#5AE65A]/20 blur-3xl rounded-full"></div>
              <div className="absolute inset-0 -m-8 bg-[#5AE65A]/10 blur-2xl rounded-full animate-pulse"></div>
              
              <div className="relative h-[500px] w-full">
                <Image
                  src="https://res.cloudinary.com/djvrmss6p/image/upload/v1733115420/vf6gal4hnesdfl757vej.png"
                  alt="Justin Roiland y Dan Harmon"
                  width={600}
                  height={500}
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Dan Harmon */}
            <div className="w-full md:w-1/3 space-y-6">
              <h3 className="text-2xl font-semibold text-[#5AE65A]">Dan Harmon</h3>
              <p className="text-xl leading-relaxed text-gray-300">
                Co-creador y showrunner principal. Nacido en Milwaukee, Wisconsin. 
                Conocido por crear Community y el concepto del "Círculo de la Historia". 
                Su experiencia en narrativa y desarrollo de personajes ha sido fundamental 
                para la profundidad emocional y complejidad narrativa de Rick and Morty.
              </p>
              <Link
                href="https://twitter.com/danharmon"
                target="_blank"
                className="inline-flex items-center gap-2 text-[#5AE65A] hover:text-[#5AE65A]/80 transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span>@danharmon</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Elegant transition to Cultural Impact */}
      <div className="relative h-32">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#5AE65A] to-transparent transform rotate-45" />
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#5AE65A] to-transparent transform -rotate-45" />
        </motion.div>
      </div>

      {/* Cultural Impact Section with refined animations */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 relative z-10 container mx-auto px-4"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`p-8 rounded-2xl ${bgClass} backdrop-blur-lg shadow-xl relative overflow-hidden`}
        >
          {/* Subtle animated background */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-[#5AE65A]/5 to-transparent pointer-events-none"
          />
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6 text-[#5AE65A] relative"
          >
            Impacto Cultural
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed relative"
          >
            Rick and Morty ha dejado una huella indeleble en la cultura pop moderna. 
            La serie ha inspirado innumerables memes, referencias culturales y ha 
            influido en la forma en que la animación para adultos aborda temas 
            complejos como la existencia, la familia y la moralidad.
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  )
}