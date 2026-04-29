import { motion } from 'framer-motion'
import { TrendUp, ShieldCheck, Brain, Database, Plugs, CloudCheck } from '@phosphor-icons/react'

const reasons = [
  {
    icon: TrendUp,
    title: 'Digital Transformation is Inevitable',
    desc: 'Nigerian universities are under increasing pressure to digitize operations. NUC mandates are pushing for technology adoption.',
  },
  {
    icon: ShieldCheck,
    title: 'App Store & Play Store Compliant',
    desc: 'Reader-mode architecture ensures no payment flows in the mobile app. All purchases on web. Fully compliant with Apple & Google policies.',
  },
  {
    icon: Brain,
    title: 'AI-Native Platform',
    desc: 'Gemini-powered AI assistant for flashcards, quizzes, document processing, and audio transcription. Students get a personal tutor.',
  },
  {
    icon: Database,
    title: 'Production-Grade Infrastructure',
    desc: 'Django + PostgreSQL + Redis + Celery. WebSockets for real-time. Cloudinary for files. Not a prototype — a deployed system.',
  },
  {
    icon: Plugs,
    title: 'Three Connected Interfaces',
    desc: 'Mobile app (Expo), Lecturers Portal (Next.js), Payment Portal (Next.js) — all hitting one unified REST + WebSocket backend.',
  },
  {
    icon: CloudCheck,
    title: 'Already Live on Railway',
    desc: '5 production services running: web server, Celery worker, Celery beat, Redis, PostgreSQL. Zero downtime deployment.',
  },
]

export function WhyNowSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="deck-badge mb-6">
          Why Now
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-black text-center"
        >
          The timing is{' '}
          <span style={{ color: 'var(--gold)' }}>perfect</span>
        </motion.h2>

        <div className="gold-divider mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="deck-card"
            >
              <r.icon size={28} weight="duotone" color="var(--gold)" className="mb-4" />
              <h3 className="text-sm font-bold text-white mb-2">{r.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
