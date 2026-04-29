import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { TitleSlide } from './slides/TitleSlide'
import { ProblemSlide } from './slides/ProblemSlide'
import { SolutionSlide } from './slides/SolutionSlide'
import { ProductDemoSlide } from './slides/ProductDemoSlide'
import { TractionSlide } from './slides/TractionSlide'
import { MarketSlide } from './slides/MarketSlide'
import { RevenueSlide } from './slides/RevenueSlide'
import { DeploymentSlide } from './slides/DeploymentSlide'
import { WhyNowSlide } from './slides/WhyNowSlide'
import { ClosingSlide } from './slides/ClosingSlide'

const slides = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  ProductDemoSlide,
  TractionSlide,
  MarketSlide,
  RevenueSlide,
  DeploymentSlide,
  WhyNowSlide,
  ClosingSlide,
]

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.97,
  }),
}

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const total = slides.length

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= total) return
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current, total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const CurrentSlide = slides[current]

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[var(--dark)]">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />

      {/* Slide content */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Bottom floating navigation pill */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-5 py-3 rounded-full z-50"
        style={{
          background: 'rgba(17,17,17,0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--dark-border)',
          boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
        }}
      >
        <button
          onClick={prev}
          disabled={current === 0}
          className="p-1.5 rounded-lg transition-colors disabled:opacity-20"
          style={{ color: 'var(--text-secondary)' }}
        >
          <CaretLeft size={18} weight="bold" />
        </button>

        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-500 rounded-full"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? 'var(--gold)' : 'var(--text-muted)',
                boxShadow: i === current ? '0 0 8px rgba(201,168,76,0.5)' : 'none',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === total - 1}
          className="p-1.5 rounded-lg transition-colors disabled:opacity-20"
          style={{ color: 'var(--text-secondary)' }}
        >
          <CaretRight size={18} weight="bold" />
        </button>
      </motion.div>

      {/* Slide counter */}
      <div className="slide-counter">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  )
}
