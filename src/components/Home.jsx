import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.p variants={itemVariants} className="text-teal-400 font-medium mb-2 tracking-wide">Halo, nama saya</motion.p>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">Teguh Hidayat</motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-semibold text-slate-400 mb-6">Mahasiswa Informatika</motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400 max-w-lg mb-8 leading-relaxed">
            Saya berfokus pada <strong>Web Development</strong> dan <strong>Mobile Development</strong>. 
            Membangun antarmuka yang modern, responsif, dan memberikan pengalaman pengguna yang optimal.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link to="projects" smooth={true} duration={500}>
              <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1">
                View Projects
                <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-teal-500 p-2 overflow-hidden shadow-2xl shadow-teal-500/20">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Teguh Hidayat" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
