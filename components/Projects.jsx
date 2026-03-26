'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Ecommerce Web App',
    badge: 'Full Stack',
    description: 'Full stack ecommerce app with complete auth system (JWT, OTP, bcrypt), REST APIs, rate limiting, Axios interceptors, and protected routes.',
    tech: ['Next.js', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'JWT'],
    link: 'https://farhan-ecommrace.vercel.app/',
    github: 'https://github.com/kashif4817/Farhan-Ecommrace',
    image: '/ecommrace.png',
    category: 'fullstack',
  },
  {
    title: 'Ecommerce Admin Panel',
    badge: 'Full Stack',
    description: 'Admin dashboard for the ecommerce platform with role-based access control, product and order management, and protected admin routes.',
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'JWT'],
    link: 'https://farhan-admin-pannel.vercel.app/',
    github: 'https://github.com/kashif4817/farhan-admin-pannel',
    image: '/admin.png',
    category: 'fullstack',
  },
  {
    title: 'BizPOS',
    badge: 'SaaS - Internship',
    description: 'SaaS-based Point of Sale system built during internship at Airoxlab using Next.js. Designed for real business environments.',
    tech: ['Next.js', 'React', 'JavaScript'],
    link: 'https://github.com/kashif4817',
    github: null,
    image: null,
    gradient: 'from-emerald-500 to-teal-600',
    icon: 'B',
    category: 'fullstack',
  },
  {
    title: 'Pixel Nest',
    badge: 'Frontend',
    description: 'A project showcase platform with modern UI, clean card layouts, and fully responsive design built with HTML, Tailwind CSS and JavaScript.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    link: 'https://pixel-next.netlify.app/',
    github: 'https://github.com/Rashid4817/CodeVault---Project-Showcase',
    image: '/pixel.png',
    category: 'frontend',
  },
  {
    title: 'PowerFit Gym',
    badge: 'Frontend',
    description: 'Fitness and gym landing page with bold design, workout plans, membership sections, and responsive layout built with HTML, Tailwind CSS and JavaScript.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    link: 'https://powerfit-gym-mi.netlify.app/',
    github: 'https://github.com/Rashid4817/PowerFit-Gym---Transform-Your-Body-Mind',
    image: '/powerfit.png',
    category: 'frontend',
  },
  {
    title: 'Glamour Haven',
    badge: 'Frontend',
    description: 'Luxury beauty salon and spa website with elegant visuals, service showcase, and responsive layout built with HTML, Tailwind CSS and JavaScript.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    link: 'https://glamour-haven-luxury-beauty-salon-s.netlify.app/',
    github: 'https://github.com/Rashid4817/Glamour-Haven---Luxury-Beauty-Salon-Spa',
    image: '/glamour.png',
    category: 'frontend',
  },
]

export default function Projects() {
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
    <section id="projects" className="py-12 sm:py-16 bg-white dark:bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3">What I have Built</p>
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white">
              Featured Projects
            </h2>
          </div>

          {/* Full Stack Projects */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                Full Stack
              </span>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'fullstack').map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Frontend Projects */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/20">
                Frontend — HTML / CSS / JS
              </span>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'frontend').map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111827] overflow-hidden hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-300">

      {/* Card Header — image or gradient fallback */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          </>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">{project.icon}</span>
            </div>
          </div>
        )}

        {/* Badge top right */}
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-black/40 text-white backdrop-blur-sm">
          {project.badge}
        </span>

        {/* Live badge top left */}
        {!project.link.includes('github.com') && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-green-500/30 text-green-300 backdrop-blur-sm border border-green-400/40">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          {/* GitHub button */}
          {project.github && (
               <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}

          {/* Divider */}
          {project.github && !project.link.includes('github.com') && (
            <span className="text-gray-200 dark:text-gray-700">|</span>
          )}

          {/* Live Demo or View on GitHub */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group/link ${
              project.link.includes('github.com')
                ? 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                : 'text-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            {project.link.includes('github.com') ? (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
            {project.link.includes('github.com') ? 'View on GitHub' : 'Live Demo'}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}