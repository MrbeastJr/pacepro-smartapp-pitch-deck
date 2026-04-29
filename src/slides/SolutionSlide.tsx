import { motion } from 'framer-motion'
import { Chalkboard, DeviceMobile, Wallet, Users, MapPin, BookOpen, ChatCircle, Brain, CalendarCheck, Globe } from '@phosphor-icons/react'

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } } }

export function SolutionSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Pitch */}
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
                   style={{ borderColor: 'var(--dark-border)', background: 'var(--dark-card)' }}>
                <Globe size={14} weight="fill" color="var(--gold)" />
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                  03 / The Solution
                </span>
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl font-black leading-tight">
              One platform.{' '}
              <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dim)] bg-clip-text text-transparent">
                Every stakeholder.
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
              Three connected interfaces — mobile app, lecturers portal, and payment portal — all powered by one unified backend with real-time synchronization.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-2 pt-2">
              {[
                { icon: Chalkboard, title: 'Lecturer Portal', desc: 'Web dashboard for attendance, materials, e-books, wallet, and referrals.' },
                { icon: DeviceMobile, title: 'Student Mobile App', desc: 'iOS & Android via Expo — GPS attendance, AI tutor, community hub, study tools.' },
                { icon: Wallet, title: 'Payment Portal', desc: 'Clearance plans, e-book purchases — reader-mode compliant for App Store.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 cursor-default"
                  style={{ border: '1px solid transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.background = 'var(--dark-card)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'transparent' }}
                >
                  <div className="p-2.5 rounded-lg flex-shrink-0" style={{ background: 'var(--gold-light)' }}>
                    <item.icon size={20} weight="duotone" color="var(--gold)" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Feature grid bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl opacity-15 blur-3xl"
                 style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />

            <div className="grid grid-cols-2 gap-3 relative">
              {[
                { icon: MapPin, label: 'Geo-Fenced Attendance', color: '#DC2626' },
                { icon: BookOpen, label: 'E-Book Store', color: '#F59E0B' },
                { icon: ChatCircle, label: 'CampusHub Social', color: '#3B82F6' },
                { icon: Brain, label: 'AI Study Assistant', color: '#8B5CF6' },
                { icon: Users, label: 'Referral Network', color: '#10B981' },
                { icon: CalendarCheck, label: 'Study Planner', color: '#EC4899' },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="deck-card flex flex-col items-center text-center p-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                       style={{ background: `${f.color}15` }}>
                    <f.icon size={24} weight="duotone" color={f.color} />
                  </div>
                  <span className="text-xs font-bold text-white">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
