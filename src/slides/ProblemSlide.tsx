import { motion } from 'framer-motion'
import { Warning, ChatsCircle, Books, XCircle } from '@phosphor-icons/react'

const problems = [
  {
    icon: Warning,
    title: 'Poor Attendance Tracking',
    desc: 'Paper-based sign-in sheets are easily forged, lost, or miscounted. Lecturers have no reliable data on who actually attended.',
    stat: '40%',
    statLabel: 'Attendance records are inaccurate',
  },
  {
    icon: ChatsCircle,
    title: 'Fragmented Communication',
    desc: 'Critical announcements buried in WhatsApp groups, emails, and notice boards. Students miss deadlines and exam schedules.',
    stat: '5+',
    statLabel: 'Channels per course, no single source',
  },
  {
    icon: Books,
    title: 'Inefficient Material Distribution',
    desc: 'Course materials photocopied or shared via random links. No centralized, version-controlled repository for academic content.',
    stat: '0',
    statLabel: 'Digital infrastructure at most faculties',
  },
]

export function ProblemSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
                 style={{ borderColor: 'var(--dark-border)', background: 'var(--dark-card)' }}>
              <XCircle size={14} weight="fill" color="#DC2626" />
              <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#DC2626' }}>
                02 / The Problem
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Academic operations are{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                broken
              </span>
            </h2>

            <p className="text-base leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
              Nigerian universities rely on paper sign-in sheets, fragmented WhatsApp groups, and manual processes
              that fail students and frustrate lecturers every single day.
            </p>

            {/* Pain stat callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="deck-card"
              style={{ borderColor: 'rgba(220,38,38,0.3)', background: 'rgba(220,38,38,0.05)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#DC2626' }}>
                Industry Reality
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Zero Nigerian universities currently have a unified, mobile-first platform for attendance,
                communication, and material distribution.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Problem cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative space-y-4"
          >
            <div className="absolute inset-0 rounded-3xl opacity-10 blur-3xl"
                 style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)' }} />

            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="deck-card relative flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: 'rgba(220,38,38,0.1)' }}>
                  <p.icon size={24} weight="duotone" color="#DC2626" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                  <div className="flex items-baseline gap-2 pt-2" style={{ borderTop: '1px solid var(--dark-border)' }}>
                    <span className="text-xl font-black" style={{ color: '#DC2626' }}>{p.stat}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>
                      {p.statLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
