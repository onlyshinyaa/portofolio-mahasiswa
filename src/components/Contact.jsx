import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-slate-400 mb-12 text-lg">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui email atau media sosial di bawah ini.
          </p>

          <a 
            href="mailto:teguhhidayat@example.com"
            className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/25 mb-16"
          >
            <Mail size={20} />
            Kirim Email
          </a>

          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-500 transition-all hover:-translate-y-1 border border-slate-700 hover:border-teal-500">
              <FaGithub size={22} />
            </a>
            <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all hover:-translate-y-1 border border-slate-700 hover:border-blue-600">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-all hover:-translate-y-1 border border-slate-700 hover:border-pink-600">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition-all hover:-translate-y-1 border border-slate-700 hover:border-sky-500">
              <FaTwitter size={22} />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
