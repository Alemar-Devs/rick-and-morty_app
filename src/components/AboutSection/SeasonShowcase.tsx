'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { SiHbo } from 'react-icons/si'
import { FaAmazon, FaPlay } from 'react-icons/fa'
import Link from 'next/link'
import SeasonSlider from './components/SeasonSlider'
import SeasonModal from './components/SeasonModal'
import { Season } from './types'
import { seasons } from './data/seasons'

const SeasonShowcase = () => {
  const { theme } = useTheme()
  const [currentSeason, setCurrentSeason] = useState(0)
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSeason((prev) => (prev + 1) % seasons.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSeason = () => {
    setCurrentSeason((prev) => (prev + 1) % seasons.length)
  }

  const prevSeason = () => {
    setCurrentSeason((prev) => (prev - 1 + seasons.length) % seasons.length)
  }

  const bgClass = theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'

  return (
    <motion.section className="mb-16">
      <div className={`p-8 rounded-2xl ${bgClass} backdrop-blur-lg shadow-xl relative overflow-hidden`}>
        {/* Efecto de resplandor */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(90,230,90,0.4) 0%, rgba(0,255,255,0.2) 50%, rgba(90,230,90,0) 70%)'
            }}
          />
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Descripción y Plataformas */}
            <div className="flex flex-col justify-center items-start space-y-8">
              <h2 className="text-4xl font-bold mb-4 text-[#5AE65A] bg-blue-600/20 self-start px-4 py-1 rounded-lg">About the Show</h2>
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-[#5AE65A]">Rick and Morty</span> es una serie animada 
                que revolucionó la televisión desde su estreno en <span className="font-semibold">2013</span>. 
                Creada por <span className="font-semibold">Justin Roiland</span> y 
                <span className="font-semibold"> Dan Harmon</span>, la serie combina ciencia ficción, 
                humor negro y drama familiar de una manera única.
              </p>

              <div className="w-full">
                <h3 className="text-xl font-semibold text-[#5AE65A] mb-4">Available on</h3>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://www.hbomax.com/es/es/series/rick-and-morty" 
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600/90 hover:bg-purple-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    <SiHbo className="text-xl" />
                    <span>HBO Max</span>
                  </Link>
                  <Link 
                    href="https://www.primevideo.com/detail/Rick-and-Morty/0GQFN8LO3PW344U8TXCMQHH0JB" 
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600/90 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <FaAmazon className="text-xl" />
                    <span>Prime Video</span>
                  </Link>
                  <Link 
                    href="https://ver.movistarplus.es/ficha/rick-y-morty" 
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-green-600/90 hover:bg-green-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/20"
                  >
                    <FaPlay className="text-xl" />
                    <span>Movistar Plus</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Season Slider */}
            <SeasonSlider
              seasons={seasons}
              currentSeason={currentSeason}
              onSeasonSelect={setSelectedSeason}
              onNext={nextSeason}
              onPrev={prevSeason}
            />
          </div>
        </div>
      </div>

      {/* Season Modal */}
      <SeasonModal
        season={selectedSeason}
        onClose={() => setSelectedSeason(null)}
      />
    </motion.section>
  )
}

export default SeasonShowcase
