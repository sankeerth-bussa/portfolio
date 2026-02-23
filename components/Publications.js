"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pubs = [
  { title: 'Deploying Hadoop Architecture Using Ansible and Terraform', venue: '2021 5th International Conference on Information Systems and Computer Networks (ISCON)', publisher: 'IEEE', date: 'Dec 2021', location: 'Mathura, India' },
  { title: 'Accelerating the Machine Learning Model Deployment Using MLOps', venue: 'Journal of Physics: Conference Series, Volume 2327', publisher: '4th International Conference on Intelligent Circuits and Systems', date: 'Apr 2022', location: 'Online' },
  { title: 'Automated Pipeline for the Deployment Using OpenShift', venue: 'Procedia Computer Science, Volume 215, 2022, Pages 220-229', publisher: 'Elsevier', date: '2022', location: '' },
];

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="publications" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="gradient-text">Publications</span>
        </motion.h2>

        <div className="space-y-4">
          {pubs.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass glass-hover rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">📄</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{pub.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{pub.venue}</p>
                  <p className="text-gray-500 text-xs">{pub.publisher} &bull; {pub.date}{pub.location && ` &bull; ${pub.location}`}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
