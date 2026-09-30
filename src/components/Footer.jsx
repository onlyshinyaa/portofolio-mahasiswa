const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {currentYear} <span className="text-teal-400 font-medium">Teguh Hidayat</span>. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs mt-2">
          Built with React.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
