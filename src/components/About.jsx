import { motion } from 'framer-motion';
import { User, BookOpen, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">About Me</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 text-slate-300 space-y-4 text-lg leading-relaxed text-justify md:text-left"
          >
            <p>
              Halo! Saya <strong>Teguh Hidayat</strong>, seorang mahasiswa Informatika yang memiliki ketertarikan mendalam di dunia teknologi, khususnya dalam pengembangan perangkat lunak.
            </p>
            <p>
              Fokus utama saya adalah <strong>Web Development</strong> dan <strong>Mobile Development</strong>. Saya senang memecahkan masalah kompleks dan mengubah ide menjadi aplikasi yang fungsional, interaktif, dan mudah digunakan.
            </p>
            <p>
              Saat ini, saya terus belajar dan mengeksplorasi teknologi terbaru untuk meningkatkan kemampuan dan memberikan solusi terbaik di setiap proyek yang saya kerjakan.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors flex items-start gap-4 shadow-lg">
              <User className="text-teal-400 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Status</h3>
                <p className="text-slate-400 text-sm">Mahasiswa Aktif Informatika</p>
              </div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors flex items-start gap-4 shadow-lg">
              <BookOpen className="text-teal-400 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Pendidikan</h3>
                <p className="text-slate-400 text-sm">S1 Teknik Informatika</p>
              </div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors flex items-start gap-4 shadow-lg sm:col-span-2">
              <Code className="text-teal-400 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Fokus</h3>
                <p className="text-slate-400 text-sm">Web & Mobile Development</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
