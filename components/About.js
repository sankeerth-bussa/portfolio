"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="glass rounded-2xl p-8 md:p-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              Engineer II at <span className="text-white font-semibold">Invesco</span> specializing in cloud infrastructure, automation, and DevOps. 
              Passionate about building scalable, secure, and efficient cloud solutions using 
              <span className="text-blue-400"> AWS</span>, 
              <span className="text-purple-400"> Terraform</span>, 
              <span className="text-cyan-400"> Kubernetes</span>, and 
              <span className="text-yellow-400"> Python</span>. 
              With 3+ years of hands-on experience managing enterprise-scale infrastructure supporting 1200+ microservices and 50+ EKS clusters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
