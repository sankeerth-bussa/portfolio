"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const certs = [
  { name: 'Red Hat Certified System Administrator', date: 'Aug 2022', url: 'https://rhtapps.redhat.com/verify?certId=210-213-088', color: 'from-red-500/20 to-red-900/10', badge: '🎩' },
  { name: 'Red Hat Certified Engineer (Ansible)', date: 'Dec 2022', url: 'https://rhtapps.redhat.com/verify?certId=210-213-088', color: 'from-red-500/20 to-red-900/10', badge: '🎩' },
  { name: 'Red Hat Certified Specialist in Containers & Kubernetes', date: 'Mar 2022', url: 'https://rhtapps.redhat.com/verify?certId=210-213-088', color: 'from-red-500/20 to-red-900/10', badge: '🎩' },
  { name: 'HashiCorp Certified: Terraform Associate (003)', date: 'Feb 2024', url: 'https://www.credly.com/badges/2e5d46d3-7a65-4687-98af-b8a2c7d102bb/public_url', color: 'from-purple-500/20 to-purple-900/10', badge: '🏗️' },
  { name: 'AWS Certified SysOps Administrator – Associate', date: 'Apr 2024', url: 'https://www.credly.com/badges/3d488884-293c-4678-90f0-69722e26ea6f/public_url', color: 'from-orange-500/20 to-orange-900/10', badge: '☁️' },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass glass-hover rounded-2xl p-6 block transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${cert.color}`}
            >
              <div className="text-3xl mb-3">{cert.badge}</div>
              <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{cert.name}</h3>
              <p className="text-xs text-gray-500">{cert.date}</p>
              <div className="mt-3 text-xs text-blue-400 flex items-center gap-1">
                Verify ↗
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
