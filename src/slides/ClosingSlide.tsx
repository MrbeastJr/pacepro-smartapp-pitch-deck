import { motion } from 'framer-motion'
import { RocketLaunch, Handshake, Envelope } from '@phosphor-icons/react'

export function ClosingSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />

      {/* Decorative gold orbs */}
      <div className="absolute bottom-[-300px] left-[-200px] w-[600px] h-[600px] rounded-full opacity-8"
           style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', opacity: 0.06 }} />
      <div className="absolute top-[-200px] right-[-150px] w-[400px] h-[400px] rounded-full"
           style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', opacity: 0.04 }} />

      <div className="slide-inner text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8"
          style={{ background: 'var(--gold-light)', border: '2px solid var(--gold)' }}
        >
          <RocketLaunch size={40} weight="duotone" color="var(--gold)" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-display text-5xl md:text-7xl font-black leading-tight"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          The backend is live. The mobile app is built. The payment system is functional.
          <br />
          We are requesting <strong className="text-white">approval for a pilot rollout</strong> within
          one faculty to demonstrate impact at scale.
        </motion.p>

        {/* CTA cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 mt-12 justify-center"
        >
          <div className="deck-card flex items-center gap-4 px-6 py-4"
               style={{ borderColor: 'var(--gold)' }}>
            <Handshake size={24} weight="duotone" color="var(--gold)" />
            <div className="text-left">
              <p className="text-sm font-bold text-white">Requesting Approval</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Pilot deployment in one faculty</p>
            </div>
          </div>

          <div className="deck-card flex items-center gap-4 px-6 py-4">
            <Envelope size={24} weight="duotone" color="var(--gold)" />
            <div className="text-left">
              <p className="text-sm font-bold text-white">Contact the Team</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>pacepro@lasu.edu.ng</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-xs tracking-widest uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          PacePro SmartApp · Lagos State University · 2026
        </motion.p>
      </div>
    </div>
  )
}
