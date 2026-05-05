import { motion } from 'framer-motion'
import { TrendUp, ShieldCheck, Brain, Database, Plugs, CloudCheck } from '@phosphor-icons/react'

const reasons = [
  {
    icon: TrendUp,
    title: 'Digital Transformation is Inevitable',
    desc: 'Nigerian universities are under increasing pressure from NUC mandates to digitize operations. The window for a first-mover advantage is closing fast.',
  },
  {
    icon: ShieldCheck,
    title: 'App Store & Play Store Compliant',
    desc: 'Reader-mode architecture ensures no payment flows in the mobile app — all purchases happen on web. Fully compliant with Apple & Google policies.',
  },
  {
    icon: Brain,
    title: 'AI-Native Platform',
    desc: 'Gemini-powered AI assistant for flashcards, quizzes, document processing, and audio transcription. Every student gets a personal tutor.',
  },
  {
    icon: Database,
    title: 'Production-Grade Infrastructure',
    desc: 'Django + PostgreSQL + Redis + Celery. WebSockets for real-time updates. Cloudinary for files. Not a prototype — a deployed, battle-tested system.',
  },
  {
    icon: Plugs,
    title: 'Three Connected Interfaces',
    desc: 'Mobile app (Expo), Lecturers Portal (Next.js), Payment Portal (Next.js) — all hitting one unified REST + WebSocket backend.',
  },
  {
    icon: CloudCheck,
    title: 'Already Live on Railway',
    desc: '5 production services running 24/7: web server, Celery worker, Celery beat, Redis, PostgreSQL. Zero downtime deployment.',
  },
]

export function WhyNowSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="deck-badge mb-3 sm:mb-4 md:mb-6">
          Why Now
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center px-4"
        >
          The timing is{' '}
          <span style={{ color: 'var(--gold)' }}>perfect</span>
        </motion.h2>

        <div className="gold-divider mx-auto" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-5 sm:mt-7 md:mt-10 w-full">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="deck-card"
            >
              <r.icon size={24} weight="duotone" color="var(--gold)" className="mb-2.5 sm:mb-3 md:mb-4 sm:w-7 sm:h-7" />
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1 sm:mb-2">{r.title}</h3>
              <p className="text-[10px] sm:text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
