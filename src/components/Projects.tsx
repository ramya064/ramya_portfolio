import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Cloud, Code } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Weather App',
      description:
        'Dynamic weather forecasting app showing live temperature, humidity and wind speed with an intuitive interface.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Real-time weather data',
        'City search functionality',
        'Responsive design',
      ],
      liveLink: 'https://ramya064.github.io/Weather_App/',
      githubLink: 'https://github.com/ramya064/Weather_App',
      icon: Cloud,
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern portfolio showcasing projects and skills built with React, Tailwind CSS and Framer Motion.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Smooth animations',
        'Dark theme',
        'Responsive layout',
      ],
      liveLink: '#',
      githubLink: 'https://github.com/ramya064',
      icon: Code,
      gradient: 'from-violet-400 to-purple-500',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                <project.icon className="w-24 h-24 text-white/90 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-900/30 text-primary-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-slate-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-800"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-600"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
