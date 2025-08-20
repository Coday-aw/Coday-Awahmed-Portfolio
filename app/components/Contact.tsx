import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
  contactInView: boolean;
}

const Contact: React.FC<ContactProps> = ({ contactRef, contactInView }) => {
  return (
    <motion.section
      id="contact"
      ref={contactRef}
      initial={{ opacity: 0, y: 40 }}
      animate={contactInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          data-animate
          className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent transition-all duration-700"
        >
          Let's Work Together
        </h2>

        <p
          data-animate
          className="text-xl text-gray-600 mb-12 transition-all duration-700 delay-200"
        >
          I'm always interested in new opportunities and exciting projects.
          Let's create something amazing together!
        </p>

        <div
          data-animate
          className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 "
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:Coday-aw@hotmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            Send Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/coday-awahmed-58783628b/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-200"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Coday-aw"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-200"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
