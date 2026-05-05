import { motion } from 'framer-motion'
import { Warning, ChatsCircle, Books, XCircle } from '@phosphor-icons/react'

const problems = [
  {
    icon: Warning,
    title: 'Poor Attendance Tracking',
    desc: 'Paper-based sign-in sheets are easily forged, lost, or miscounted — lecturers have no reliable way to know who actually attended class.',
    stat: '40%',
    statLabel: 'Records are inaccurate',
  },
  {
    icon: ChatsCircle,
    title: 'Fragmented Communication',
    desc: 'Critical announcements are buried across WhatsApp groups, emails, and notice boards. Students routinely miss deadlines and exam schedules.',
    stat: '5+',
    statLabel: 'Channels per course',
  },
  {
    icon: Books,
    title: 'No Digital Infrastructure',
    desc: 'Course materials are photocopied or shared via random file links. There is no centralized, version-controlled repository for academic content.',
    stat: '0',
    statLabel: 'Unified platforms exist',
  },
]

export function ProblemSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">

          {/* Left: Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6 order-1"
          >
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border"
                 style={{ borderColor: 'var(--dark-border)', background: 'var(--dark-card)' }}>
              <XCircle size={14} weight="fill" color="#DC2626" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase" style={{ color: '#DC2626' }}>
                02 / The Problem
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Academic operations are{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                broken
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
              Nigerian universities rely on paper sign-in sheets, fragmented WhatsApp groups, and manual processes
              that fail students and frustrate lecturers every single day.
            </p>

            {/* Problem illustration (mobile/tablet) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block lg:hidden"
            >
              <img
                src="/images/problem.png"
                alt="Broken academic operations"
                className="slide-illustration"
              />
            </motion.div>

            {/* Pain stat callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="deck-card"
              style={{ borderColor: 'rgba(220,38,38,0.3)', background: 'rgba(220,38,38,0.05)' }}
            >
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#DC2626' }}>
                Industry Reality
              </p>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
            className="relative space-y-3 sm:space-y-4 order-2 w-full"
          >
            {/* Desktop illustration */}
            <div className="hidden lg:block mb-4">
              <img
                src="/images/problem.png"
                alt="Broken academic operations"
                className="slide-illustration"
              />
            </div>

            <div className="absolute inset-0 rounded-3xl opacity-10 blur-3xl"
                 style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)' }} />

            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="deck-card relative flex gap-3 sm:gap-4"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: 'rgba(220,38,38,0.1)' }}>
                  <p.icon size={20} weight="duotone" color="#DC2626" className="sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 sm:mb-1">{p.title}</h3>
                  <p className="text-[10px] sm:text-xs leading-relaxed mb-2 sm:mb-3" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                  <div className="flex items-baseline gap-1.5 sm:gap-2 pt-1.5 sm:pt-2" style={{ borderTop: '1px solid var(--dark-border)' }}>
                    <span className="text-lg sm:text-xl font-black" style={{ color: '#DC2626' }}>{p.stat}</span>
                    <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>
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
