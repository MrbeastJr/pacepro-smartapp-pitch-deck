import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Chalkboard, DeviceMobile, Wallet, Users, MapPin, BookOpen, ChatCircle, Brain, CalendarCheck, Globe, X, CheckCircle, GraduationCap, ChartBar, Clock, PaperPlaneTilt, Exam } from '@phosphor-icons/react'

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } } }

/* ── Feature data with comprehensive descriptions ── */
const features = [
  {
    id: 'geo', icon: MapPin, label: 'Geo-Fenced Attendance', color: '#DC2626',
    image: '/features/geo.png',
    desc: 'Secure location-based check-ins ensuring students are physically present within a 50m radius of the lecture hall. Uses GPS + Wi-Fi triangulation for maximum accuracy.',
    details: [
      'Real-time GPS verification with 50m radius enforcement',
      'Anti-spoofing protection prevents mock location apps',
      'Lecturers create sessions with one tap — students check in automatically',
      'Attendance history with analytics for both students and lecturers',
      'WebSocket-powered live counter shows check-ins in real time',
    ],
  },
  {
    id: 'ebook', icon: BookOpen, label: 'E-Book Store', color: '#F59E0B',
    image: '/features/ebook.png',
    desc: 'A built-in marketplace where lecturers publish course materials as PDFs, set their own prices in Naira, and earn 80% of every sale — paid directly to their Monnify wallet.',
    details: [
      'Lecturers upload PDFs via Cloudinary with instant publishing',
      'Reader-mode compliant — passes Apple App Store guidelines',
      'Monnify-powered payments with automatic 80/20 revenue split',
      'Students purchase once, access forever — synced across devices',
      'Category browsing, search, and faculty-based recommendations',
    ],
  },
  {
    id: 'social', icon: ChatCircle, label: 'CampusHub Social', color: '#3B82F6',
    image: null,
    desc: 'A real-time social forum for students to discuss topics, share resources, and connect with peers across faculties. Built with Django Channels WebSockets for instant messaging.',
    details: [
      'Real-time feed with posts, likes, comments, and threaded replies',
      'Direct messaging with online/offline presence indicators',
      'Faculty-based channels for targeted academic discussions',
      'Community Spotlight for promoting events, brands, and announcements',
      'Push notifications for mentions, replies, and DMs',
    ],
  },
  {
    id: 'ai', icon: Brain, label: 'AI Study Assistant', color: '#8B5CF6',
    image: null,
    desc: 'Gemini-powered AI tutor that helps students understand complex topics, summarize lecture notes, generate practice questions, and prepare for exams — all within the app.',
    details: [
      'Powered by Google Gemini API for accurate academic responses',
      'Context-aware — understands your enrolled courses and syllabus',
      'Generates practice quizzes and explains solutions step-by-step',
      'Summarizes uploaded lecture notes and PDFs automatically',
      'Chat history saved for revision and follow-up questions',
    ],
  },
  {
    id: 'referral', icon: Users, label: 'Referral Network', color: '#10B981',
    image: null,
    desc: 'Incentivized growth engine rewarding students and lecturers for onboarding peers. Every successful referral earns real money deposited directly to their platform wallet.',
    details: [
      'Unique referral links for every user with tracking analytics',
      'Multi-tier rewards — earn from direct and indirect referrals',
      'Real-time earnings dashboard with withdrawal to bank account',
      'Leaderboard system gamifies growth across departments',
      'Lecturers earn bonus commissions for referring other lecturers',
    ],
  },
  {
    id: 'planner', icon: CalendarCheck, label: 'Study Planner', color: '#EC4899',
    image: null,
    desc: 'Automated scheduling tool that syncs with your course timetable, tracks assignment deadlines, and sends smart reminders so you never miss an exam or submission.',
    details: [
      'Auto-imports course schedule from your registered courses',
      'Color-coded calendar with weekly and monthly views',
      'Smart reminders via push notifications before deadlines',
      'Task checklist with priority levels and completion tracking',
      'Integrates with attendance data to show your academic overview',
    ],
  },
  {
    id: 'lec-dash', icon: ChartBar, label: 'Lecturer Dashboard', color: '#0F172A',
    image: null,
    desc: 'A premium bento-grid web dashboard giving lecturers a bird\'s-eye view of student outreach, wallet balance, earnings, referral stats, and recent attendance sessions.',
    details: [
      'Bento-grid layout with student outreach, wallet, and earnings cards',
      'Live attendance session history with present-count analytics',
      'Referral network intelligence with student-level tracking',
      'Monnify wallet integration with real-time balance display',
      'Institutional milestone progress bars and tier tracking',
    ],
  },
  {
    id: 'lec-schedule', icon: Clock, label: 'Class Scheduling', color: '#0EA5E9',
    image: null,
    desc: 'Lecturers build and manage their weekly timetable from the portal. Sessions sync to students\' apps in real time and support iCal export for Google/Apple Calendar.',
    details: [
      '7-day weekly planner with drag-and-drop session management',
      'Color-coded session types: Lecture, Tutorial, Lab, Seminar',
      'iCal feed integration for Google, Apple, Outlook calendars',
      'One-click sync pushes schedule changes to all enrolled students',
      'Program-specific filtering (Full-Time, Part-Time, Sandwich)',
    ],
  },
  {
    id: 'lec-updates', icon: PaperPlaneTilt, label: 'Send Updates', color: '#6366F1',
    image: null,
    desc: 'Lecturers broadcast announcements, lecture materials, and important notices directly to students\' mobile feeds with real-time view tracking and engagement analytics.',
    details: [
      'Three dispatch types: Announcement, Material, Assignment',
      'File attachment support for PDFs, slides, and documents',
      'Real-time view counter with per-student engagement tracking',
      'Category filters and search for managing dispatch history',
      'Push notifications sent instantly to all enrolled students',
    ],
  },
  {
    id: 'lec-assign', icon: Exam, label: 'Assignment Center', color: '#D97706',
    image: null,
    desc: 'Create and manage assignments with due dates, file attachments, and automatic deadline tracking. Students see progress bars counting down to submission deadlines.',
    details: [
      'Create assignments with due dates and file attachments',
      'Automatic deadline progress bars visible to students',
      'View submission status and student engagement per assignment',
      'Supports course-specific and program-specific targeting',
      'Integrated with student planner for automatic reminders',
    ],
  },
]

/* ── Inline Mockup Components (based on real PacePro app screens) ── */

function AttendanceMockup() {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: 'linear-gradient(135deg, #DC2626, #991B1B)' }}>
      <div className="px-4 pt-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-widest text-white/90">LIVE ATTENDANCE</span>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded bg-black/25 text-white font-bold">50m RADIUS</span>
      </div>
      <div className="px-4 flex-1 flex flex-col justify-center">
        <div className="text-3xl font-black text-white tracking-tight">ECO 201</div>
        <div className="text-xs text-white/80 font-semibold mt-1">Micro Economics II · Prof. Adebayo</div>
        <div className="text-xs text-white/70 font-medium mt-1">Tap to mark your presence now!</div>
      </div>
      <div className="px-4 pb-4 flex items-end justify-between">
        <div className="flex items-center gap-1.5 bg-black/25 px-3 py-2 rounded-xl">
          <MapPin size={12} weight="fill" color="white" />
          <span className="text-[10px] font-bold text-white">Hall 404</span>
        </div>
        <div className="text-right bg-white/10 px-3 py-1.5 rounded-lg">
          <span className="text-[8px] text-white/70 font-black uppercase tracking-widest block">Ends at</span>
          <span className="text-sm font-black text-white">11:30 AM</span>
        </div>
      </div>
      <MapPin size={100} weight="thin" color="white" className="absolute right-[-15px] bottom-[-10px] opacity-[0.06] -rotate-12" />
    </div>
  )
}

function CommunityMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0a0a0a]">
      <div className="px-4 pt-4 pb-3 flex items-center justify-between border-b border-white/10">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-700" />
        <span className="text-sm font-extrabold text-white">Community</span>
        <div className="w-7 h-7 rounded-lg bg-white/10" />
      </div>
      <div className="px-4 pt-3">
        <span className="text-xs font-bold text-white mb-2 block">Community Spotlight</span>
        <div className="flex gap-2 overflow-hidden">
          <div className="w-24 h-16 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex-shrink-0 flex items-end p-2">
            <span className="text-[7px] font-bold text-white/90">BUSINESS</span>
          </div>
          <div className="w-24 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 flex-shrink-0 flex items-end p-2">
            <span className="text-[7px] font-bold text-white/90">EVENT</span>
          </div>
        </div>
      </div>
      <div className="px-4 pt-3">
        <span className="text-xs font-bold text-white mb-2 block">Your Channels</span>
        {['General Chat', 'CSC Dept', 'Memes & Fun'].map((ch, i) => (
          <div key={i} className="flex items-center gap-2.5 py-2 border-b border-white/5">
            <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
              <ChatCircle size={14} color={i === 0 ? '#C9A84C' : '#666'} weight="duotone" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-white">{ch}</span>
                {i === 0 && <span className="text-[6px] px-1 py-0.5 rounded bg-[#C9A84C] text-black font-black">MAIN</span>}
              </div>
              <span className="text-[8px] text-white/40">12 members</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AIMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0a0a0a]">
      <div className="px-4 pt-4 pb-3 border-b border-white/10 text-center">
        <span className="text-sm font-extrabold text-white">AI Study Assistant</span>
        <div className="text-[9px] text-purple-400 font-bold">Powered by Gemini</div>
      </div>
      <div className="flex-1 px-4 pt-3 space-y-3 overflow-hidden">
        <div className="self-end ml-auto max-w-[75%] bg-purple-600 rounded-2xl rounded-br-sm px-3 py-2">
          <span className="text-[10px] text-white">Explain supply and demand curves in micro economics</span>
        </div>
        <div className="max-w-[85%] bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-3 py-2">
          <span className="text-[10px] text-white/80 leading-relaxed">The <b className="text-purple-300">supply curve</b> shows the relationship between price and quantity supplied. As price increases, producers are willing to supply more...</span>
        </div>
        <div className="self-end ml-auto max-w-[60%] bg-purple-600 rounded-2xl rounded-br-sm px-3 py-2">
          <span className="text-[10px] text-white">Generate 3 practice questions</span>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-white/10">
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2">
          <span className="text-[10px] text-white/30 flex-1">Ask anything about your courses...</span>
          <Brain size={14} color="#8B5CF6" />
        </div>
      </div>
    </div>
  )
}

function ReferralMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0a0a0a]">
      <div className="px-4 pt-4 pb-3 border-b border-white/10">
        <span className="text-sm font-extrabold text-white">Referral Dashboard</span>
      </div>
      <div className="px-4 pt-3 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
            <div className="text-lg font-black text-emerald-400">12</div>
            <div className="text-[8px] text-white/50 font-bold uppercase">Referrals</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
            <div className="text-lg font-black text-emerald-400">₦24k</div>
            <div className="text-[8px] text-white/50 font-bold uppercase">Earned</div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
          <div className="text-[8px] text-white/40 font-bold uppercase mb-1">Your Link</div>
          <div className="text-[9px] text-[#C9A84C] font-mono truncate">pacepro.app/ref/240611035</div>
        </div>
        <div className="text-[9px] text-white/40 font-bold uppercase mt-1">Recent Referrals</div>
        {['Adewale J.', 'Folake M.'].map((n, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-[8px] text-emerald-400 font-bold">{n[0]}</div>
            <span className="text-[10px] text-white/70 flex-1">{n}</span>
            <span className="text-[8px] text-emerald-400 font-bold">+₦2,000</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlannerMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0a0a0a]">
      <div className="px-4 pt-4 pb-3 border-b border-white/10 flex items-center justify-between">
        <span className="text-sm font-extrabold text-white">Study Planner</span>
        <span className="text-[9px] px-2 py-0.5 bg-pink-500/20 text-pink-400 font-bold rounded">PRIORITY</span>
      </div>
      <div className="px-4 pt-3 space-y-2">
        {[
          { title: 'Economics Essay', course: 'ECO 201', due: '2h left', color: '#EC4899', pct: 85 },
          { title: 'Lab Report Draft', course: 'PHY 102', due: '1d left', color: '#F59E0B', pct: 40 },
          { title: 'Group Presentation', course: 'BUS 301', due: '3d left', color: '#10B981', pct: 15 },
        ].map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-white">{t.title}</span>
              <span className="text-[8px] font-bold" style={{ color: t.color }}>{t.due}</span>
            </div>
            <span className="text-[8px] text-white/40 font-bold">{t.course}</span>
            <div className="mt-2 h-1 rounded bg-white/10">
              <div className="h-full rounded" style={{ width: `${t.pct}%`, background: t.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AcademicMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0a0a0a]">
      <div className="px-4 pt-4 pb-3 border-b border-white/10">
        <span className="text-sm font-extrabold text-white">E-Book Store</span>
      </div>
      <div className="px-4 pt-3">
        <div className="flex gap-2 mb-3 overflow-hidden">
          {[
            { code: 'ECO 201', color: '#0A3B7C' },
            { code: 'BUS 301', color: '#C9A84C' },
            { code: 'PHY 102', color: '#1A1A1A' },
          ].map((b, i) => (
            <div key={i} className="w-16 h-24 rounded-lg flex-shrink-0 flex flex-col justify-between p-2 relative overflow-hidden" style={{ background: b.color }}>
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-black/20" />
              <span className="text-[7px] font-black text-white/80 tracking-wider">{b.code}</span>
              <div className="h-0.5 rounded bg-white/30 mt-auto">
                <div className="h-full rounded bg-white/60" style={{ width: `${60 + i * 15}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="text-[9px] text-white/40 font-bold uppercase mb-2">Featured</div>
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 rounded-xl p-3">
          <span className="text-[7px] bg-[#C9A84C] text-black px-1.5 py-0.5 rounded font-black">BESTSELLER</span>
          <div className="text-xs font-bold text-white mt-1.5">Principles of Micro Economics</div>
          <div className="text-[9px] text-white/60 mt-0.5">Prof. Adebayo · ₦2,500</div>
        </div>
      </div>
    </div>
  )
}

function LecturerDashMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#fafafa] text-[#111]">
      <div className="px-4 pt-4 pb-2 border-b border-black/5">
        <div className="text-[8px] font-black uppercase tracking-widest text-[#7C4F30] mb-0.5">Academic Session 2025/2026</div>
        <div className="text-lg font-black tracking-tight text-[#111]">Dashboard <span className="text-black/20 font-light mx-1">/</span> <span className="text-black/40 font-medium">Professor</span></div>
      </div>
      <div className="px-4 pt-3 grid grid-cols-2 gap-2">
        <div className="bg-white rounded-2xl p-3 border border-black/5">
          <div className="text-[7px] font-bold uppercase tracking-widest text-black/40 mb-1">Student Outreach</div>
          <div className="text-2xl font-light tracking-tight">1,240</div>
          <div className="flex gap-0.5 mt-2 h-5 items-end">{[35,55,40,75,50,85,65].map((h,i)=><div key={i} className="flex-1 rounded-sm bg-black/5" style={{height:`${h}%`}}/>)}</div>
        </div>
        <div className="bg-white rounded-2xl p-3 border border-black/5">
          <div className="text-[7px] font-bold uppercase tracking-widest text-black/40 mb-1">Wallet Balance</div>
          <div className="flex items-baseline gap-1"><span className="text-xs text-black/40 font-bold">₦</span><span className="text-2xl font-light tracking-tight">125,450</span></div>
        </div>
        <div className="col-span-2 bg-white rounded-2xl p-3 border border-black/5">
          <div className="text-[7px] font-bold uppercase tracking-widest text-black/40 mb-1">Recent Attendance</div>
          {[{code:'CSC401',venue:'LT2',count:124},{code:'CSC302',venue:'Hall A',count:88}].map((s,i)=>(
            <div key={i} className="flex items-center justify-between py-1.5 border-b border-black/5 last:border-0">
              <div><span className="text-[8px] font-black text-[#7C4F30]">{s.code}</span> <span className="text-[8px] text-black/30">· {s.venue}</span></div>
              <span className="text-[9px] font-light text-black/60">{s.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScheduleMockup() {
  const days = ['MON','TUE','WED','THU','FRI']
  return (
    <div className="absolute inset-0 flex flex-col bg-[#fafafa] text-[#111]">
      <div className="px-4 pt-4 pb-2 border-b border-black/5">
        <div className="text-[8px] font-black uppercase tracking-widest text-[#0EA5E9] mb-0.5">Academic Timetable</div>
        <div className="text-lg font-black tracking-tight">Schedule <span className="text-black/20 font-light mx-1">/</span> <span className="text-black/40 font-medium">Weekly</span></div>
      </div>
      <div className="px-3 pt-3 grid grid-cols-5 gap-1.5 flex-1">
        {days.map((d,di)=>(
          <div key={d} className="flex flex-col gap-1.5">
            <div className="text-center py-1.5 rounded-lg bg-white border border-black/5">
              <div className="text-[7px] font-black uppercase tracking-widest text-[#0EA5E9]">{d}</div>
            </div>
            {di < 3 && <div className="rounded-xl bg-white border border-black/5 p-2 relative overflow-hidden">
              <div className="absolute left-0 top-1 bottom-1 w-0.5 rounded-r bg-blue-500"/>
              <div className="text-[6px] font-black text-blue-500 uppercase pl-1.5">Lecture</div>
              <div className="text-[7px] font-black text-[#7C4F30] pl-1.5 mt-0.5">CSC{401+di*100}</div>
              <div className="text-[6px] text-black/40 pl-1.5">09:00–11:00</div>
            </div>}
            {di === 1 && <div className="rounded-xl bg-white border border-black/5 p-2 relative overflow-hidden">
              <div className="absolute left-0 top-1 bottom-1 w-0.5 rounded-r bg-amber-500"/>
              <div className="text-[6px] font-black text-amber-500 uppercase pl-1.5">Tutorial</div>
              <div className="text-[7px] font-black text-[#7C4F30] pl-1.5 mt-0.5">CSC302</div>
              <div className="text-[6px] text-black/40 pl-1.5">14:00–16:00</div>
            </div>}
          </div>
        ))}
      </div>
    </div>
  )
}

function UpdatesMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#fafafa] text-[#111]">
      <div className="px-4 pt-4 pb-2 border-b border-black/5 flex items-center justify-between">
        <div>
          <div className="text-[8px] font-black uppercase tracking-widest text-[#6366F1] mb-0.5">Institutional Broadcasts</div>
          <div className="text-base font-black tracking-tight">Updates</div>
        </div>
        <div className="text-[8px] px-2 py-1 bg-[#0F172A] text-white rounded-lg font-bold">+ New</div>
      </div>
      <div className="px-4 pt-3 space-y-2">
        {[
          {type:'ANNOUNCEMENT',code:'CSC401',title:'Mid-term Project Guidelines',color:'#3B82F6',views:245},
          {type:'MATERIAL',code:'CSC401',title:'Lecture 8: Neural Networks',color:'#10B981',views:95},
          {type:'ASSIGNMENT',code:'CSC302',title:'Lab Exercise 4: Sorting',color:'#F59E0B',views:88},
        ].map((u,i)=>(
          <div key={i} className="bg-white rounded-2xl p-3 border border-black/5 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center" style={{background:`${u.color}15`}}>
              <PaperPlaneTilt size={14} color={u.color} weight="duotone"/>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[7px] font-black px-1.5 py-0.5 rounded bg-[#0F172A] text-white">{u.code}</span>
                <span className="text-[7px] font-bold px-1.5 py-0.5 rounded border" style={{color:u.color,borderColor:`${u.color}30`,background:`${u.color}08`}}>{u.type}</span>
              </div>
              <div className="text-[9px] font-bold text-[#111] truncate">{u.title}</div>
            </div>
            <div className="text-[8px] text-black/40 font-bold">{u.views}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AssignmentMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0a0a0a]">
      <div className="px-4 pt-4 pb-3 border-b border-white/10">
        <span className="text-sm font-extrabold text-white">Assignment Center</span>
      </div>
      <div className="px-4 pt-3 space-y-2.5">
        {[
          {title:'Economics Essay',course:'ECO 201',due:'2h left',color:'#DC2626',pct:90},
          {title:'Lab Report Draft',course:'PHY 102',due:'1d left',color:'#F59E0B',pct:45},
          {title:'Group Presentation',course:'BUS 301',due:'3d left',color:'#10B981',pct:15},
        ].map((a,i)=>(
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-white">{a.title}</span>
              <span className="text-[8px] font-bold" style={{color:a.color}}>{a.due}</span>
            </div>
            <div className="text-[8px] text-white/40 font-bold mb-2">{a.course}</div>
            <div className="h-1 rounded bg-white/10"><div className="h-full rounded" style={{width:`${a.pct}%`,background:a.color}}/></div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Mockup Router ── */
function MockupVisual({ feature }: { feature: typeof features[0] }) {
  if (feature.image) {
    return <img src={feature.image} alt={feature.label} className="w-full h-full object-cover" />
  }
  const mockups: Record<string, () => React.ReactNode> = {
    social: CommunityMockup,
    ai: AIMockup,
    referral: ReferralMockup,
    planner: PlannerMockup,
    geo: AttendanceMockup,
    ebook: AcademicMockup,
    'lec-dash': LecturerDashMockup,
    'lec-schedule': ScheduleMockup,
    'lec-updates': UpdatesMockup,
    'lec-assign': AssignmentMockup,
  }
  const Comp = mockups[feature.id]
  return Comp ? <Comp /> : null
}

/* ── Main Slide ── */
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
                { icon: DeviceMobile, title: 'Student Mobile App', desc: 'iOS & Android via Expo — GPS attendance, AI tutor, community hub.' },
                { icon: Wallet, title: 'Payment Portal', desc: 'Clearance plans, e-book purchases — reader-mode compliant.' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants}
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

          {/* Right: Clickable feature grid */}
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="absolute inset-0 rounded-3xl opacity-15 blur-3xl"
                 style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
              {features.map((f, i) => (
                <motion.div key={f.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.06 }} onClick={() => setActiveFeature(f)}
                  className="deck-card flex flex-col items-center text-center py-5 px-3 group cursor-pointer hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110"
                       style={{ background: `${f.color}12` }}>
                    <f.icon size={20} weight="duotone" color={f.color} />
                  </div>
                  <span className="text-[10px] font-bold text-white leading-tight">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Expanding Modal ── */}
      <AnimatePresence>
        {activeFeature && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActiveFeature(null)} className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-lg" />
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-6 pointer-events-none">
              <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-3xl rounded-2xl border overflow-hidden pointer-events-auto flex flex-col md:flex-row"
                style={{ background: '#0a0a0a', borderColor: '#222', boxShadow: '0 25px 80px -12px rgba(0,0,0,0.8)' }}>

                <button onClick={() => setActiveFeature(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10">
                  <X size={16} weight="bold" color="white" />
                </button>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                       style={{ background: `${activeFeature.color}15` }}>
                    <activeFeature.icon size={28} weight="duotone" color={activeFeature.color} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{activeFeature.label}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                    {activeFeature.desc}
                  </p>
                  <div className="space-y-2.5">
                    {activeFeature.details.map((d, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.06 }}
                        className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle size={14} weight="fill" color={activeFeature.color} className="flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual Mockup */}
                <div className="flex-1 min-h-[280px] md:min-h-full border-t md:border-t-0 md:border-l relative overflow-hidden"
                     style={{ borderColor: '#222', background: '#111' }}>
                  <MockupVisual feature={activeFeature} />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
