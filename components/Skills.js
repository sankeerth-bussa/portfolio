"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'AWS', emoji: '☁️' },
  { name: 'Kubernetes', emoji: '⎈' },
  { name: 'Terraform', emoji: '🏗️' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'Linux', emoji: '🐧' },
  { name: 'Ansible', emoji: '⚙️' },
  { name: 'Bitbucket', emoji: '🪣' },
  { name: 'OpenShift', emoji: '🔴' },
  { name: 'Podman', emoji: '🦭' },
  { name: 'Confluence', emoji: '📝' },
  { name: 'Jira', emoji: '📋' },
  { name: 'Git', emoji: '🔀' },
  { name: 'Wiz', emoji: '🛡️' },
  { name: 'Splunk', emoji: '📊' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="gradient-text">Technical Skills</span>
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass glass-hover rounded-xl p-4 text-center cursor-default transition-all duration-300 group"
            >
              <div className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.emoji}
              </div>
              <p className="text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
