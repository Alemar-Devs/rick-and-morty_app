'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Season } from '../../types'

interface SeasonSliderProps {
  seasons: Season[]
  currentSeason: number
  onSeasonSelect: (season: Season) => void
  onNext: () => void
  onPrev: () => void
}

const SeasonSlider = ({ 
  seasons, 
  currentSeason, 
  onSeasonSelect, 
  onNext, 
  onPrev 
}: SeasonSliderProps) => {
  return (
    <div className="flex flex-col items-center mt-8 lg:mt-0">
      <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-60 h-[360px] sm:h-[380px] md:h-[400px] group">
        {/* Efecto de resplandor detrás del slider */}
        <div className="absolute inset-0 -z-10 opacity-50 blur-[50px] scale-110 bg-gradient-to-t from-[#5AE65A]/30 via-cyan-500/20 to-purple-500/30" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSeason}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            onClick={() => onSeasonSelect(seasons[currentSeason])}
          >
            <Image
              src={seasons[currentSeason].image}
              alt={seasons[currentSeason].title}
              fill
              className="object-cover rounded-xl cursor-pointer shadow-xl"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 240px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-1">{seasons[currentSeason].title}</h3>
              <p className="text-xs md:text-sm opacity-90">{seasons[currentSeason].year}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles del Slider */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="w-8 h-8 rounded-md border border-[#5AE65A] flex items-center justify-center text-[#5AE65A] hover:bg-[#5AE65A] hover:text-black transition-all duration-300"
          aria-label="Previous season"
        >
          <FaArrowLeft className="text-xs md:text-sm" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="w-8 h-8 rounded-md border border-[#5AE65A] flex items-center justify-center text-[#5AE65A] hover:bg-[#5AE65A] hover:text-black transition-all duration-300"
          aria-label="Next season"
        >
          <FaArrowRight className="text-xs md:text-sm" />
        </button>
      </div>
    </div>
  )
}

export default SeasonSlider
