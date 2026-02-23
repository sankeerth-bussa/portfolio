"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass glass-hover rounded-2xl p-8 transition-all duration-300"
        >
          <div className="flex gap-5 items-start">
            <span className="text-4xl">🎓</span>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Sreenidhi Institute of Science and Technology</h3>
              <p className="text-gray-400 mb-1">Hyderabad, Telangana, India</p>
              <p className="text-gray-300 text-sm">B.Tech, Electronics &amp; Computer Engineering</p>
              <div className="flex flex-wrap gap-4 mt-3">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">GPA: 8.53</span>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Aug 2018 – June 2022</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
