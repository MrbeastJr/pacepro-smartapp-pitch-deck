import { motion } from 'framer-motion'
import { MapPin, UploadSimple, Bell, BookOpen, Users, Clock, CheckCircle, WifiHigh } from '@phosphor-icons/react'

export function ProductDemoSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">

          {/* Left: Pitch text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6 order-1"
          >
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border"
                 style={{ borderColor: 'var(--dark-border)', background: 'var(--dark-card)' }}>
              <MapPin size={14} weight="fill" color="var(--gold)" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                04 / Product Overview
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Built for{' '}
              <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dim)] bg-clip-text text-transparent">
                real workflows
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
              From geo-fenced attendance to e-book publishing, every feature maps directly to an existing
              academic pain point — digitized and automated.
            </p>

            <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
              {[
                { icon: MapPin, title: 'GPS-Verified Attendance', desc: 'Students must be within 50m radius to mark present. No proxies allowed.' },
                { icon: UploadSimple, title: 'One-Click Material Upload', desc: 'PDFs, slides, and assignments — instantly available to all enrolled students.' },
                { icon: Bell, title: 'Real-Time Push Alerts', desc: 'Attendance sessions, deadlines, and announcements delivered instantly.' },
                { icon: BookOpen, title: 'E-Book Revenue Engine', desc: 'Lecturers publish PDFs, set prices, and earn 80% of every sale.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 cursor-default"
                  style={{ border: '1px solid transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.background = 'var(--dark-card)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'transparent' }}
                >
                  <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg flex-shrink-0" style={{ background: 'var(--gold-light)' }}>
                    <item.icon size={16} weight="duotone" color="var(--gold)" className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-[10px] sm:text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mock Attendance UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 w-full"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-3xl opacity-20 blur-3xl"
                 style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />

            <div className="deck-card relative overflow-hidden" style={{ padding: '1rem' }}>
              {/* Session header */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-emerald-400">Live Session</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <WifiHigh size={12} color="var(--text-muted)" />
                  <span className="text-[8px] sm:text-[10px] font-mono hidden sm:inline" style={{ color: 'var(--text-muted)' }}>WebSocket Active</span>
                </div>
              </div>

              {/* Course info */}
              <div className="mb-3 sm:mb-5">
                <div className="flex gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <span className="px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold uppercase tracking-wider"
                        style={{ background: 'var(--gold-light)', color: 'var(--gold)' }}>ECO 201</span>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold uppercase tracking-wider"
                        style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>200L</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">Micro Economics II</h3>
                <p className="text-[10px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>Prof. Adebayo · Faculty of Social Sciences</p>
              </div>

              {/* Attendance stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-5">
                {[
                  { icon: Users, val: '142', label: 'Enrolled' },
                  { icon: CheckCircle, val: '87', label: 'Present' },
                  { icon: Clock, val: '14:23', label: 'Elapsed' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--dark-border)' }}>
                    <s.icon size={14} weight="duotone" color="var(--gold)" className="mx-auto mb-1 sm:mb-1.5 sm:w-4 sm:h-4" />
                    <div className="text-sm sm:text-base md:text-lg font-black text-white">{s.val}</div>
                    <div className="text-[7px] sm:text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Student list mockup */}
              <div className="space-y-1.5 sm:space-y-2">
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: 'var(--text-muted)' }}>
                  Recent Check-ins
                </div>
                {[
                  { name: 'Olorungbebe Folorunsho', id: '240611035', time: '2s ago', status: 'verified' },
                  { name: 'Alabi Muiz', id: '240611091', time: '15s ago', status: 'verified' },
                  { name: 'Johnson Adewale', id: '240611042', time: '32s ago', status: 'verified' },
                ].map((student, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg sm:rounded-xl"
                    style={{ border: '1px solid var(--dark-border)' }}
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold flex-shrink-0"
                           style={{ background: 'var(--gold-light)', color: 'var(--gold)' }}>
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs font-semibold text-white truncate">{student.name}</p>
                        <p className="text-[9px] sm:text-[10px]" style={{ color: 'var(--text-muted)' }}>{student.id}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="inline-flex items-center gap-0.5 sm:gap-1 px-1 sm:px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-bold uppercase bg-emerald-500/10 text-emerald-400">
                        <CheckCircle size={10} weight="fill" /> {student.status}
                      </div>
                      <p className="text-[8px] sm:text-[9px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{student.time}</p>
                    </div>
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
