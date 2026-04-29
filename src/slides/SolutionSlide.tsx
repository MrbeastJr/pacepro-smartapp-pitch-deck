import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Chalkboard, DeviceMobile, Wallet, Users, MapPin, BookOpen, ChatCircle, Brain, CalendarCheck, Globe, X } from '@phosphor-icons/react'

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } } }

const features = [
  { id: 'geo', icon: MapPin, label: 'Geo-Fenced Attendance', color: '#DC2626', desc: 'Secure location-based check-ins ensuring students are physically present within a 50m radius of the lecture hall.' },
  { id: 'ebook', icon: BookOpen, label: 'E-Book Store', color: '#F59E0B', desc: 'A built-in marketplace for lecturers to publish course materials and students to purchase them securely.' },
  { id: 'social', icon: ChatCircle, label: 'CampusHub Social', color: '#3B82F6', desc: 'A real-time forum for students to discuss topics, share resources, and connect with peers across faculties.' },
  { id: 'ai', icon: Brain, label: 'AI Study Assistant', color: '#8B5CF6', desc: 'Gemini-powered tutor that helps students understand complex topics, summarize notes, and prepare for exams.' },
  { id: 'referral', icon: Users, label: 'Referral Network', color: '#10B981', desc: 'Incentivized growth loop rewarding students and lecturers for onboarding their peers to the platform.' },
  { id: 'planner', icon: CalendarCheck, label: 'Study Planner', color: '#EC4899', desc: 'Automated scheduling tool syncing with course timetables to help students manage deadlines effectively.' },
]

export function SolutionSlide() {
  const [activeFeature, setActiveFeature] = useState<typeof features[0] | null>(null)

  return (
    <div className="slide relative">
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

            <div className="grid grid-cols-2 gap-3 relative z-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.id}
                  layoutId={`card-${f.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  onClick={() => setActiveFeature(f)}
                  className="deck-card flex flex-col items-center text-center p-5 group cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <motion.div layoutId={`icon-container-${f.id}`} className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                       style={{ background: `${f.color}15` }}>
                    <f.icon size={24} weight="duotone" color={f.color} />
                  </motion.div>
                  <motion.span layoutId={`title-${f.id}`} className="text-xs font-bold text-white">{f.label}</motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Expandable Modal Overlay */}
      <AnimatePresence>
        {activeFeature && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFeature(null)}
              className="absolute inset-0 z-40 bg-black/60 backdrop-blur-md"
            />
            <div className="absolute inset-0 z-50 flex items-center justify-center p-8 pointer-events-none">
              <motion.div
                layoutId={`card-${activeFeature.id}`}
                className="deck-card relative w-full max-w-2xl bg-[#0a0a0a] border border-[#222] shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row"
                style={{ padding: 0 }}
              >
                <button 
                  onClick={() => setActiveFeature(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                >
                  <X size={16} weight="bold" color="white" />
                </button>

                <div className="flex-1 p-8 flex flex-col justify-center">
                  <motion.div layoutId={`icon-container-${activeFeature.id}`} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                       style={{ background: `${activeFeature.color}15` }}>
                    <activeFeature.icon size={32} weight="duotone" color={activeFeature.color} />
                  </motion.div>
                  <motion.h3 layoutId={`title-${activeFeature.id}`} className="text-2xl font-bold text-white mb-4">
                    {activeFeature.label}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm leading-relaxed" 
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {activeFeature.desc}
                  </motion.p>
                </div>
                
                {/* Visual Placeholder / Mockup Area */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex-1 min-h-[250px] md:min-h-full border-l border-[#222] relative overflow-hidden bg-[#111]"
                >
                  {/* Decorative background matching icon color */}
                  <div className="absolute inset-0 opacity-20"
                       style={{ background: `radial-gradient(circle at 50% 50%, ${activeFeature.color}, transparent 70%)` }} />
                  
                  {/* Mockup visual representation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl flex items-center justify-center relative overflow-hidden">
                      {/* Top bar mockup */}
                      <div className="absolute top-0 left-0 right-0 h-6 border-b border-white/10 bg-white/5 flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <div className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      
                      <activeFeature.icon size={64} weight="thin" color={activeFeature.color} className="opacity-50" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
