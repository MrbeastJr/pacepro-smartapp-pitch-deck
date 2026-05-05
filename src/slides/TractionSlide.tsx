import { motion } from 'framer-motion'
import { Users, Buildings, CheckCircle, Rocket, TrendUp, Globe, Database, CloudCheck } from '@phosphor-icons/react'

const stats = [
  { value: '15+', label: 'Lecturers', icon: Users },
  { value: '5+', label: 'Departments', icon: Buildings },
  { value: '100%', label: 'Uptime', icon: CheckCircle },
  { value: 'Live', label: 'Production', icon: Rocket },
]

const techStack = [
  { label: 'Backend', value: 'Django 6.0 + DRF', icon: Database },
  { label: 'Database', value: 'PostgreSQL on Railway', icon: Database },
  { label: 'Real-Time', value: 'Django Channels + Redis', icon: Globe },
  { label: 'Deployment', value: '5 Railway Services', icon: CloudCheck },
]

const milestones = [
  'Full backend deployed — web, worker, beat, Redis, PostgreSQL',
  'WebSocket real-time chat & live notifications active',
  'Monnify payment + webhook integration complete',
  'E-book purchase flow with Cloudinary storage live',
  'Lecturers & Payment portals deployed on Vercel',
]

export function TractionSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">

          {/* Left: Pitch */}
          <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 sm:space-y-5 lg:space-y-6 order-1">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border"
                 style={{ borderColor: 'var(--dark-border)', background: 'var(--dark-card)' }}>
              <TrendUp size={14} weight="fill" color="var(--gold)" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                05 / Traction
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Already{' '}
              <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dim)] bg-clip-text text-transparent">
                in motion
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
              This is not a concept. The entire stack is deployed, tested, and processing real transactions.
              We are presenting a live, production-grade system.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="deck-card text-center py-3 sm:py-4 md:py-5"
                >
                  <s.icon size={18} weight="duotone" color="var(--gold)" className="mx-auto mb-1.5 sm:mb-2 sm:w-5 sm:h-5" />
                  <div className="text-lg sm:text-xl md:text-2xl font-black" style={{ color: 'var(--gold)' }}>{s.value}</div>
                  <div className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold mt-0.5 sm:mt-1" style={{ color: 'var(--text-muted)' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Tech + milestones */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative space-y-3 sm:space-y-4 order-2 w-full"
          >
            <div className="absolute inset-0 rounded-3xl opacity-15 blur-3xl"
                 style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />

            {/* Tech stack card */}
            <div className="deck-card relative">
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4" style={{ color: 'var(--gold)' }}>
                Production Architecture
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {techStack.map((t, i) => (
                  <div key={i} className="p-2 sm:p-3 rounded-lg sm:rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--dark-border)' }}>
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest block mb-0.5 sm:mb-1" style={{ color: 'var(--text-muted)' }}>{t.label}</span>
                    <span className="text-[10px] sm:text-xs font-bold text-white">{t.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones card */}
            <div className="deck-card relative">
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4" style={{ color: 'var(--gold)' }}>
                Key Milestones
              </div>
              <div className="space-y-2 sm:space-y-2.5">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-start gap-2 sm:gap-2.5 text-[10px] sm:text-xs"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <CheckCircle size={14} weight="fill" color="var(--gold)" className="flex-shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
