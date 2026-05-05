import { motion } from 'framer-motion'
import { CurrencyNgn, Wallet, BookOpen, UsersFour } from '@phosphor-icons/react'

const streams = [
  {
    icon: CurrencyNgn,
    title: 'Student Clearance Plans',
    desc: 'Semester (₦3,000) or Full Session (₦5,000) per student. Activates all digital academic services for the enrollment period.',
    highlight: '₦3,000 – ₦5,000 / student',
  },
  {
    icon: BookOpen,
    title: 'E-Book Marketplace',
    desc: 'Lecturers publish & price e-books. PacePro takes 20% platform commission while authors earn 80% instantly to their wallet.',
    highlight: '20% platform commission',
  },
  {
    icon: Wallet,
    title: 'Business Directory',
    desc: 'Premium listing for campus-oriented businesses. One-time payment for visibility to the entire student body and faculty.',
    highlight: '₦10,000+ / listing',
  },
  {
    icon: UsersFour,
    title: 'Referral Network',
    desc: 'Lecturers earn ₦1,000 per referred student payment. Drives organic, faculty-led adoption across departments.',
    highlight: '₦1,000 / referral',
  },
]

export function RevenueSlide() {
  return (
    <div className="slide">
      <div className="grid-bg" />
      <div className="slide-inner">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="deck-badge mb-3 sm:mb-4 md:mb-6">
          Revenue Model
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center px-4"
        >
          Multiple{' '}
          <span style={{ color: 'var(--gold)' }}>revenue streams</span>
        </motion.h2>

        <div className="gold-divider mx-auto" />

        {/* Revenue illustration */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full max-w-xl mx-auto"
        >
          <img
            src="/images/revenue.png"
            alt="Revenue growth projection"
            className="slide-illustration"
          />
        </motion.div>

        {/* Revenue projections banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="deck-card w-full mt-4 sm:mt-6 md:mt-8 text-center"
          style={{ borderColor: 'var(--gold)', background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, var(--dark-card) 100%)' }}
        >
          <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2" style={{ color: 'var(--gold)' }}>
            Conservative Projection — LASU Alone
          </p>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">57,000</span>
            <span className="text-xs sm:text-sm md:text-lg" style={{ color: 'var(--text-muted)' }}>students ×</span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: 'var(--gold)' }}>₦3,000</span>
          </div>
          <div className="mt-2 sm:mt-3 flex items-center justify-center gap-1.5 sm:gap-2">
            <span className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>=</span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black" style={{ color: 'var(--gold)' }}>₦171,000,000</span>
            <span className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>/ semester</span>
          </div>
        </motion.div>

        {/* Revenue stream cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8 w-full">
          {streams.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="deck-card"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: 'var(--gold-light)' }}>
                  <s.icon size={18} weight="duotone" color="var(--gold)" className="sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">{s.title}</h3>
                  <p className="text-[10px] sm:text-xs leading-relaxed mb-1.5 sm:mb-2" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                  <span className="text-[10px] sm:text-xs font-bold" style={{ color: 'var(--gold)' }}>{s.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
