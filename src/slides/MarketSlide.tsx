import { motion } from 'framer-motion'
import { GlobeHemisphereWest, ArrowRight, Buildings } from '@phosphor-icons/react'

const phases = [
  { label: 'Phase 1', name: 'LASU (Lagos State University)', desc: '57,000+ students · 5 faculties · Pilot deployment', active: true },
  { label: 'Phase 2', name: 'Lagos State Institutions', desc: 'LASPOTECH, AOCOED, LASUSTH — state-wide expansion', active: false },
  { label: 'Phase 3', name: 'Federal Universities', desc: 'UNILAG, OAU, UI — Tier-1 federal institutions', active: false },
  { label: 'Phase 4', name: 'Pan-Nigerian Scale', desc: '170+ universities · 2M+ students nationwide', active: false },
]

export function MarketSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="deck-badge mb-3 sm:mb-4 md:mb-6">
          Market Opportunity
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center px-4"
        >
          From one campus to{' '}
          <span style={{ color: 'var(--gold)' }}>every campus</span>
        </motion.h2>

        <div className="gold-divider mx-auto" />

        {/* Market map image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full max-w-xl mx-auto"
        >
          <img
            src="/images/market-map.png"
            alt="Nigerian market expansion"
            className="slide-illustration"
          />
        </motion.div>

        {/* Market stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl mx-auto">
          {[
            { val: '170+', label: 'Universities in Nigeria' },
            { val: '2.1M', label: 'Students Enrolled' },
            { val: '$0', label: 'Current Digital Solutions' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="stat-value text-xl sm:text-2xl md:text-3xl lg:text-4xl">{s.val}</div>
              <div className="stat-label text-[9px] sm:text-[10px] md:text-xs">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Expansion roadmap */}
        <div className="mt-6 sm:mt-8 md:mt-10 w-full space-y-2.5 sm:space-y-3 md:space-y-4">
          {phases.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="deck-card flex items-center gap-3 sm:gap-4 md:gap-5"
              style={p.active ? { borderColor: 'var(--gold)', boxShadow: '0 0 20px rgba(201,168,76,0.1)' } : {}}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ background: p.active ? 'var(--gold-light)' : 'rgba(255,255,255,0.03)' }}>
                {p.active ? (
                  <GlobeHemisphereWest size={18} weight="duotone" color="var(--gold)" className="sm:w-5 sm:h-5" />
                ) : (
                  <Buildings size={18} weight="duotone" color="var(--text-muted)" className="sm:w-5 sm:h-5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest"
                        style={{ color: p.active ? 'var(--gold)' : 'var(--text-muted)' }}>
                    {p.label}
                  </span>
                  {p.active && (
                    <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-1.5 sm:px-2 py-0.5 rounded-full"
                          style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-white truncate">{p.name}</h3>
                <p className="text-[10px] sm:text-xs hidden sm:block" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
              <ArrowRight size={16} color="var(--text-muted)" className="flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
