"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const bullets = [
  { icon: '🚀', text: 'Designed and automated AWS infrastructure using reusable Terraform modules and Bitbucket Pipelines, achieving nearly 60% reduction in provisioning time and 100% compliance with organizational standards.' },
  { icon: '🔧', text: 'Acted as Cloud Administrator with expertise in Linux System Administration and EC2 patching for Windows/RHEL, reducing patching time by 85% and failures by 40%.' },
  { icon: '🛠️', text: 'Created and maintained Ansible playbooks for patching validation and monitoring, integrating results into Splunk for oversight and proactive management.' },
  { icon: '🌐', text: 'Provisioned and managed AWS infrastructure as code (IaC) using Terraform, supporting 1200+ microservices and serverless applications, and maintaining over 50 EKS clusters with isolated namespaces.' },
  { icon: '⚙️', text: 'Developed Python automation scripts and tools, saving 100% of time on manual processes, including AWS account login automation and ServiceNow API integrations.' },
  { icon: '🤝', text: 'Collaborated with teams across Networking, Cyber Security, and Systems Administration (Linux/Windows) to optimize cloud infrastructure and ensure security compliance.' },
  { icon: '🔒', text: 'Utilized Wiz security tools for cloud risk analysis and mitigation.' },
  { icon: '💻', text: 'Developed backend solutions in Python, including full-stack applications for the ServiceNow CMDB and a Streamlit web UI for SailPoint IAM certification, enhancing user experience and operational efficiency.' },
  { icon: '📈', text: 'Wrote Ansible automation for custom log and fact collection to monitor Teams Rooms devices, enabling comprehensive oversight in Splunk.' },
  { icon: '🏆', text: 'Won a cloud hackathon by building a Python CLI toolkit to streamline AWS operations.' },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="gradient-text">Work Experience</span>
        </motion.h2>

        <div className="relative pl-10">
          <div className="timeline-line" />
          <div className="timeline-dot" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 md:p-8 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Engineer II, Cloud Solutions (AWS)</h3>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">Jul 2022 – Present</span>
              </div>
              <p className="text-blue-400 text-sm mb-6">Invesco &bull; Hyderabad, India</p>

              <div className="space-y-4">
                {bullets.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex gap-3 group"
                  >
                    <span className="text-lg flex-shrink-0 mt-0.5">{b.icon}</span>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-200">{b.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
