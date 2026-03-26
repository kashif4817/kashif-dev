'use client'
import { useEffect, useRef } from 'react'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb,
} from 'react-icons/si'
import { TbApi, TbDeviceLaptop, TbBrandSass, TbShoppingCart, TbBug, TbRocket } from 'react-icons/tb'

const services = [
  {
    icon: <TbDeviceLaptop size={22} />,
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end MERN stack applications — from database schema to polished UI — built clean and ready to scale.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-blue-500/10 to-blue-600/5 border-blue-200/60 dark:border-blue-500/20',
    iconBg: 'bg-blue-500/10 text-blue-500 dark:text-blue-400',
    dot: 'bg-blue-500',
  },
  {
    icon: <SiNextdotjs size={20} />,
    title: 'Next.js Development',
    desc: 'Fast, SEO-friendly web apps with server-side rendering, file-based routing, and optimized performance.',
    tags: ['Next.js', 'SSR', 'SEO', 'Tailwind CSS'],
    color: 'from-gray-400/10 to-gray-500/5 border-gray-200/60 dark:border-gray-500/20',
    iconBg: 'bg-gray-500/10 text-gray-700 dark:text-gray-300',
    dot: 'bg-gray-500',
  },
  {
    icon: <TbApi size={22} />,
    title: 'REST API Development',
    desc: 'Secure, well-structured REST APIs with proper authentication, validation, and clean endpoint design.',
    tags: ['Express.js', 'JWT Auth', 'REST', 'Postman'],
    color: 'from-emerald-500/10 to-emerald-600/5 border-emerald-200/60 dark:border-emerald-500/20',
    iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    dot: 'bg-emerald-500',
  },
  {
    icon: <TbRocket size={22} />,
    title: 'SaaS Product Development',
    desc: 'Built real SaaS products like BizPOS and ERP systems. I understand what it takes to ship a product for real users.',
    tags: ['SaaS', 'Dashboard', 'Multi-user', 'Auth'],
    color: 'from-purple-500/10 to-purple-600/5 border-purple-200/60 dark:border-purple-500/20',
    iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    dot: 'bg-purple-500',
  },
  {
    icon: <TbBrandSass size={22} />,
    title: 'Landing Pages & Portfolios',
    desc: 'Responsive, animated landing pages and portfolio sites that look sharp on every screen size.',
    tags: ['React', 'Tailwind CSS', 'Animations', 'Responsive'],
    color: 'from-sky-500/10 to-sky-600/5 border-sky-200/60 dark:border-sky-500/20',
    iconBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
    dot: 'bg-sky-500',
  },
  {
    icon: <TbBug size={22} />,
    title: 'Bug Fixing & Code Review',
    desc: 'Stuck on a bug or need a second pair of eyes on your codebase? I dig in, find the root cause, and fix it properly.',
    tags: ['Debugging', 'Refactoring', 'Code Review', 'Optimization'],
    color: 'from-rose-500/10 to-rose-600/5 border-rose-200/60 dark:border-rose-500/20',
    iconBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    dot: 'bg-rose-500',
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-8 sm:py-12 bg-white dark:bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className="section-animate">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3">What I Offer</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">Services</h2>
            <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
              Got an idea but need someone to build it? Here's what I can deliver — clean code, real results, no fluff.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className={`relative group bg-gradient-to-br ${s.color} border rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${s.iconBg} mb-4`}>
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-2">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-white/60 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle dot accent */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${s.dot} opacity-60`} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Need something built? Let's talk.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-colors shadow-md shadow-blue-500/20"
            >
              Get in Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}