import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Heart } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Code2,
      title: 'Quick Learner',
      description: 'Rapidly adapting to new technologies and frameworks',
    },
    {
      icon: Zap,
      title: 'Smart Worker',
      description: 'Efficient problem-solving with optimal solutions',
    },
    {
      icon: Heart,
      title: 'Passionate Developer',
      description: 'Dedicated to creating polished web experiences',
    },
  ];

  return (
    <section
      id="about"
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm a quick learner, smart worker, and passionate about
              programming and problem-solving. I enjoy building frontend
              projects that combine design, animation, and polish.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently pursuing B.Tech in Computer Science & Engineering with
              specialization in AI & ML, I strive to create web applications
              that are not only functional but also visually appealing and
              user-friendly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300"
              >
                <div className="p-3 bg-primary-900/30 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
