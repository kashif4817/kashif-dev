'use client'
import { useEffect, useRef } from 'react'
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb , SiTailwindcss, SiGithub, SiJsonwebtokens, SiSupabase, SiPostman } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const skills = [
  { name: 'JavaScript',   level: 'Intermediate',     icon: <SiJavascript />,    color: 'from-yellow-400/20 to-yellow-500/5 border-yellow-200/60 dark:border-yellow-500/20',     iconColor: '#F7DF1E', dot: 'bg-yellow-400' },
  { name: 'React.js',     level: 'Intermediate',     icon: <SiReact />,         color: 'from-cyan-400/20 to-cyan-500/5 border-cyan-200/60 dark:border-cyan-500/20',             iconColor: '#61DAFB', dot: 'bg-cyan-400' },
  { name: 'Next.js',      level: 'Intermediate', icon: <SiNextdotjs />,     color: 'from-gray-400/20 to-gray-500/5 border-gray-200/60 dark:border-gray-500/20',             iconColor: '#888888', dot: 'bg-gray-400' },
  { name: 'Node.js',      level: 'Advanced',     icon: <SiNodedotjs />,     color: 'from-green-400/20 to-green-500/5 border-green-200/60 dark:border-green-500/20',         iconColor: '#339933', dot: 'bg-green-400' },
  { name: 'Express.js',   level: 'Advanced',     icon: <SiExpress />,       color: 'from-gray-400/20 to-gray-500/5 border-gray-200/60 dark:border-gray-600/20',             iconColor: '#888888', dot: 'bg-gray-500' },
  { name: 'MongoDB', level: 'Intermediate', icon: <SiMongodb />, color: 'from-green-600/20 to-green-700/5 border-green-200/60 dark:border-green-700/20', iconColor: '#47A248', dot: 'bg-green-600' },  { name: 'Tailwind CSS', level: 'Advanced',     icon: <SiTailwindcss />,   color: 'from-sky-400/20 to-sky-500/5 border-sky-200/60 dark:border-sky-500/20',                 iconColor: '#38BDF8', dot: 'bg-sky-400' },
  { name: 'Git & GitHub', level: 'Intermediate', icon: <SiGithub />,        color: 'from-orange-400/20 to-orange-500/5 border-orange-200/60 dark:border-orange-500/20',     iconColor: '#F05032', dot: 'bg-orange-400' },
  { name: 'REST APIs',    level: 'Advanced',     icon: <TbApi />,           color: 'from-blue-400/20 to-blue-500/5 border-blue-200/60 dark:border-blue-500/20',             iconColor: '#3B82F6', dot: 'bg-blue-400' },
  { name: 'JWT Auth',     level: 'Intermediate', icon: <SiJsonwebtokens />, color: 'from-purple-400/20 to-purple-500/5 border-purple-200/60 dark:border-purple-500/20',     iconColor: '#8B5CF6', dot: 'bg-purple-400' },
  { name: 'Supabase',     level: 'Intermediate', icon: <SiSupabase />,      color: 'from-emerald-400/20 to-emerald-500/5 border-emerald-200/60 dark:border-emerald-500/20', iconColor: '#3ECF8E', dot: 'bg-emerald-400' },
  { name: 'Postman',      level: 'Intermediate', icon: <SiPostman />,       color: 'from-orange-400/20 to-orange-500/5 border-orange-200/60 dark:border-orange-600/20',     iconColor: '#FF6C37', dot: 'bg-orange-500' },
]

export default function Skills() {
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
    <section id="skills" className="py-12 sm:py-16 bg-gray-50 dark:bg-[#080d14]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3">What I Work With</p>
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`group relative bg-gradient-to-br ${skill.color} border rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden`}
              >
                {/* Glow background fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-md"
                  style={{ background: skill.iconColor }}
                />

                {/* Glow outer ring */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"
                  style={{ boxShadow: `0 0 22px 3px ${skill.iconColor}` }}
                />

                {/* Card content */}
                <div className="relative z-10">
                  <div className="mb-3 text-3xl" style={{ color: skill.iconColor }}>
                    {skill.icon}
                  </div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    {skill.name}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${skill.dot}`} />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}