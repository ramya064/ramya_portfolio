import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'B.Tech – Computer Science & Engineering (AI & ML)',
      institution: 'Dadi Institute of Engineering and Technology',
      period: '2022 – 2025',
      grade: 'CGPA: 8.2',
    },
    {
      degree: 'Diploma – Electronics & Communication Engineering',
      institution: '',
      period: '',
      grade: '82%',
    },
    {
      degree: 'SSC',
      institution: '',
      period: '',
      grade: '93%',
    },
  ];

  const certifications = [
    {
      title: 'Java',
      issuer: 'HackerRank',
    },
    {
      title: 'Introduction to HTML5',
      issuer: 'Infosys Springboard',
    },
    {
      title: 'Web Development',
      issuer: 'EdX',
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-900/30 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 pb-6 border-l-2 border-primary-800 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-500 rounded-full ring-4 ring-slate-800" />
                  <div className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">
                      {edu.degree}
                    </h4>
                    {edu.institution && (
                      <p className="text-slate-400 mb-1">
                        {edu.institution}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-3">
                      {edu.period && (
                        <span className="text-sm text-slate-500">
                          {edu.period}
                        </span>
                      )}
                      <span className="px-3 py-1 bg-primary-900/30 text-primary-400 rounded-full text-sm font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-900/30 rounded-lg">
                <Award className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-slate-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary-500" />
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
