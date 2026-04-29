import { motion } from 'framer-motion'
import { Lightning } from '@phosphor-icons/react'

export function TitleSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />

      {/* Multiple decorative orbs for depth */}
      <div className="absolute top-[-250px] right-[-200px] w-[600px] h-[600px] rounded-full opacity-[0.07]"
           style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-300px] left-[-150px] w-[500px] h-[500px] rounded-full opacity-[0.04]"
           style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />

      <div className="slide-inner text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="deck-badge">
            <Lightning weight="fill" size={12} />
            University Management Platform
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-display text-7xl md:text-[120px] font-black mt-8 tracking-tight leading-[0.85]"
        >
          <span className="text-white">Pace</span>
          <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dim)] bg-clip-text text-transparent">Pro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mt-6 tracking-[0.2em] uppercase font-medium"
          style={{ color: 'var(--text-muted)' }}
        >
          SmartApp
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.55 }}
        >
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-xl md:text-2xl font-light mt-6 max-w-lg mx-auto leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Digitizing Academic Operations at Scale
        </motion.h2>

        {/* Presenter info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
            Presented by
          </p>
          <p className="text-base font-bold bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dim)] bg-clip-text text-transparent">
            The PacePro Team
          </p>
          <p className="text-[11px] mt-1 tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            Lagos State University · 2026
          </p>
        </motion.div>
      </div>
    </div>
  )
}
