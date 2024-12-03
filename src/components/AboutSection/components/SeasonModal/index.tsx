'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'
import { Season } from '../../types'

interface SeasonModalProps {
  season: Season | null
  onClose: () => void
}

export const SeasonModal = ({ season, onClose }: SeasonModalProps) => {
  const [showCast, setShowCast] = useState(false)
  const [showEpisodes, setShowEpisodes] = useState(false)

  if (!season) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          >
            <FaTimes />
          </button>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="relative w-60 h-[400px] flex-shrink-0 mx-auto md:mx-0">
              <div className="absolute inset-0 -z-10 opacity-50 blur-[50px] scale-110 bg-gradient-to-t from-[#5AE65A]/30 via-cyan-500/20 to-purple-500/30" />
              <Image
                src={season.image}
                alt={season.title}
                fill
                className="object-cover rounded-xl shadow-xl"
                sizes="(max-width: 240px) 100vw, 240px"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-[#5AE65A]">{season.title}</h3>
              <p className="text-sm opacity-80 mb-4">{season.year}</p>
              <p className="text-lg font-medium mb-3 text-[#5AE65A]/80">{season.synopsis}</p>
              <p className="mb-6">{season.description}</p>

              {/* Dropdowns */}
              <div className="space-y-4">
                <div className="border rounded-xl overflow-hidden transition-all duration-300 hover:border-[#5AE65A]/50">
                  <button
                    onClick={() => setShowCast(!showCast)}
                    className="w-full px-4 py-3 flex justify-between items-center bg-gray-900/20"
                  >
                    <span className="font-medium">Cast</span>
                    {showCast ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <AnimatePresence>
                    {showCast && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 space-y-2">
                          {season.cast.map((actor, index) => (
                            <p key={index} className="text-sm text-gray-300/80">
                              {actor}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border rounded-xl overflow-hidden transition-all duration-300 hover:border-[#5AE65A]/50">
                  <button
                    onClick={() => setShowEpisodes(!showEpisodes)}
                    className="w-full px-4 py-3 flex justify-between items-center bg-gray-900/20"
                  >
                    <span className="font-medium">Episodes</span>
                    {showEpisodes ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <AnimatePresence>
                    {showEpisodes && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 space-y-2">
                          {season.episodes.map((episode, index) => (
                            <p key={index} className="text-sm text-gray-300/80">
                              {index + 1}. {episode}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SeasonModal
