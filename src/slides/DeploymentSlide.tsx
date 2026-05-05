import { motion } from 'framer-motion'
import { Flag, Buildings, GlobeHemisphereWest, Checks } from '@phosphor-icons/react'

const steps = [
  {
    icon: Flag,
    phase: 'Phase 1 — Pilot',
    timeline: 'Month 1–2',
    title: 'Department-Level Pilot',
    items: [
      'Deploy to 2–3 departments within one faculty',
      'Onboard 15+ lecturers with hands-on training',
      'Collect feedback and iterate on UX',
      'Validate geo-fenced attendance accuracy',
    ],
  },
  {
    icon: Buildings,
    phase: 'Phase 2 — Faculty Rollout',
    timeline: 'Month 3–4',
    title: 'Full Faculty Deployment',
    items: [
      'Expand to entire faculty (all departments & levels)',
      'Activate payment portal for student clearance',
      'Launch e-book marketplace for lecturers',
      'Begin referral system to drive organic growth',
    ],
  },
  {
    icon: GlobeHemisphereWest,
    phase: 'Phase 3 — University-Wide',
    timeline: 'Month 5–6',
    title: 'LASU-Wide Launch',
    items: [
      'Scale to all 5 faculties — 57,000+ students',
      'Full CampusHub social network activation',
      'Admin panel for academic calendar management',
      'Push notifications via Expo + Firebase',
    ],
  },
]

export function DeploymentSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="deck-badge mb-3 sm:mb-4 md:mb-6">
          Deployment Plan
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center px-4"
        >
          Structured{' '}
          <span style={{ color: 'var(--gold)' }}>rollout strategy</span>
        </motion.h2>

        <div className="gold-divider mx-auto" />

        {/* Deployment visual */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full max-w-xl mx-auto"
        >
          <img
            src="/images/deployment.png"
            alt="Deployment timeline"
            className="slide-illustration"
          />
        </motion.div>

        <div className="mt-4 sm:mt-6 md:mt-8 w-full space-y-3 sm:space-y-4 md:space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.15 }}
              className="deck-card"
            >
              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                {/* Icon + timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
                       style={{ background: 'var(--gold-light)' }}>
                    <step.icon size={20} weight="duotone" color="var(--gold)" className="sm:w-6 sm:h-6" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="step-line w-0.5 h-4 sm:h-6 md:h-8 mt-1.5 sm:mt-2" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-0.5 sm:mb-1 flex-wrap">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                      {step.phase}
                    </span>
                    <span className="text-[8px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>
                      {step.timeline}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {step.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <Checks size={14} weight="bold" color="var(--gold)" className="flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
