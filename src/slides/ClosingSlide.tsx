import { motion } from 'framer-motion'
import { RocketLaunch, Handshake, Envelope } from '@phosphor-icons/react'

export function ClosingSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />

      {/* Decorative gold orbs */}
      <div className="absolute bottom-[-200px] left-[-150px] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
           style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', opacity: 0.06 }} />
      <div className="absolute top-[-150px] right-[-100px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
           style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', opacity: 0.04 }} />

      <div className="slide-inner text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8"
          style={{ background: 'var(--gold-light)', border: '2px solid var(--gold)' }}
        >
          <RocketLaunch size={28} weight="duotone" color="var(--gold)" className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight px-4"
        >
          Ready to deploy
          <br />
          <span style={{ color: 'var(--gold)' }} className="gold-glow">immediately.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.45 }}
          className="gold-divider mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed px-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          The backend is live. The mobile app is built. The payment system is functional.
          <br className="hidden sm:block" />
          We are requesting <strong className="text-white">approval for a pilot rollout</strong> within
          one faculty to demonstrate impact at scale.
        </motion.p>

        {/* CTA cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-12 justify-center px-4"
        >
          <div className="deck-card flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4"
               style={{ borderColor: 'var(--gold)' }}>
            <Handshake size={22} weight="duotone" color="var(--gold)" className="flex-shrink-0 sm:w-6 sm:h-6" />
            <div className="text-left">
              <p className="text-xs sm:text-sm font-bold text-white">Requesting Approval</p>
              <p className="text-[10px] sm:text-xs" style={{ color: 'var(--text-secondary)' }}>Pilot deployment in one faculty</p>
            </div>
          </div>

          <div className="deck-card flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
            <Envelope size={22} weight="duotone" color="var(--gold)" className="flex-shrink-0 sm:w-6 sm:h-6" />
            <div className="text-left">
              <p className="text-xs sm:text-sm font-bold text-white">Contact the Team</p>
              <p className="text-[10px] sm:text-xs" style={{ color: 'var(--text-secondary)' }}>lasusmartapp@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 sm:mt-8 md:mt-12 text-[10px] sm:text-xs tracking-widest uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          PacePro SmartApp · Lagos State University · 2026
        </motion.p>
      </div>
    </div>
  )
}
