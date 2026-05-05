import { motion } from 'framer-motion'
import { Lightning } from '@phosphor-icons/react'

export function TitleSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />

      {/* Multiple decorative orbs for depth */}
      <div className="absolute top-[-200px] right-[-150px] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-[0.07]"
           style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-200px] left-[-100px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-[0.04]"
           style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />

      <div className="slide-inner text-center">
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05, duration: 0.6 }}
        >
          <img
            src="/images/hero-campus.png"
            alt="PacePro Campus Platform"
            className="slide-illustration mx-auto"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="deck-badge">
            <Lightning weight="fill" size={12} />
            University Management Platform
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-black mt-4 sm:mt-6 md:mt-8 tracking-tight leading-[0.85]"
        >
          <span className="text-white">Pace</span>
          <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dim)] bg-clip-text text-transparent">Pro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 md:mt-6 tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium"
          style={{ color: 'var(--text-muted)' }}
        >
          SmartApp
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="gold-divider mx-auto mt-3 sm:mt-4 md:mt-6" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mt-3 sm:mt-4 md:mt-6 max-w-lg mx-auto leading-relaxed px-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          Digitizing Academic Operations at Scale
        </motion.h2>

        {/* Presenter info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 flex flex-col items-center gap-1.5 sm:gap-2"
        >
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
            Presented by
          </p>
          <p className="text-sm sm:text-base font-bold bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dim)] bg-clip-text text-transparent">
            The PacePro Team
          </p>
          <p className="text-[10px] sm:text-[11px] mt-0.5 sm:mt-1 tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            Lagos State University · 2026
          </p>
        </motion.div>
      </div>
    </div>
  )
}
