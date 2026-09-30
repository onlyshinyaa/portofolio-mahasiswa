import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce App',
      description: 'Aplikasi toko online berbasis web dengan fitur keranjang belanja, checkout, dan manajemen produk untuk admin.',
      tech: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management Mobile',
      description: 'Aplikasi mobile untuk mengelola tugas harian, lengkap dengan fitur pengingat dan kategori tugas.',
      tech: ['Flutter'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Website portofolio pribadi yang responsif dan modern dengan animasi yang menarik untuk menampilkan proyek dan keahlian.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">My Projects</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Beberapa karya dan proyek pengembangan web serta mobile yang telah saya bangun.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-teal-500 transition-all hover:shadow-xl hover:shadow-teal-500/10 flex flex-col h-full"
            >
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium bg-slate-700 text-teal-300 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 border-t border-slate-700 bg-slate-800/80 flex gap-4">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-teal-400 transition-colors"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-teal-400 transition-colors ml-auto"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
