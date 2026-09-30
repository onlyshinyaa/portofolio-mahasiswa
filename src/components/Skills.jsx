import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    { name: 'CSS', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { name: 'JavaScript', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
    { name: 'React', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
    { name: 'Laravel', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    { name: 'Flutter', color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
    { name: 'MySQL', color: 'text-blue-300', bg: 'bg-blue-300/10', border: 'border-blue-300/20' },
    { name: 'Git/GitHub', color: 'text-slate-200', bg: 'bg-slate-200/10', border: 'border-slate-200/20' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">My Skills</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Berbagai teknologi dan alat yang saya pelajari dan gunakan dalam mengembangkan aplikasi web dan mobile.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-2xl flex flex-col items-center justify-center text-center border cursor-default shadow-lg transition-all ${skill.bg} ${skill.border} hover:shadow-teal-500/10`}
            >
              <h3 className={`text-xl font-bold ${skill.color}`}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
