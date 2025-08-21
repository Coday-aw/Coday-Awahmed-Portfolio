import { motion } from "framer-motion";
import { CiDatabase } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { IoMdColorWand } from "react-icons/io";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  aboutInView: boolean;
}

const About: React.FC<AboutProps> = ({ aboutRef, aboutInView }) => {
  return (
    <motion.section
      id="about"
      ref={aboutRef}
      initial={{ opacity: 0, y: 40 }}
      animate={aboutInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-animate
          className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent transition-all duration-700"
        >
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-animate
            className="space-y-6 transition-all duration-700 delay-200"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">
              Passionate Frontend Developer
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a junior developer, I have a strong foundation in web
              development and a passion for learning new technologies. My
              expertise lies in creating fullstack applications using the MERN
              stack. I'm always eager to learn and grow, and I enjoy taking on
              new challenges.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Besides web development, I like sports and enjoy playing football,
              padel and spending time with friends and family in my free time.
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-2 ">
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-indigo-600 to-emerald-600">
              <div className="flex flex-col gap-1 bg-white rounded-2xl p-4 hover:shadow-2xl transition-all">
                <FaReact color="#61DAFB" />
                <p className="font-bold text-xl">Front-end</p>
                <p>Experience with React, Next.js, and Tailwind CSS</p>
              </div>
            </div>
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-indigo-600 to-emerald-600">
              <div className="flex flex-col gap-1 bg-white rounded-2xl p-4 hover:shadow-2xl transition-all">
                <CiDatabase color="#47A248" />
                <p className="font-bold text-xl">Back-end</p>
                <p>Experience with Node.js and Databases</p>
              </div>
            </div>
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-indigo-600 to-emerald-600">
              <div className="flex flex-col gap-1 bg-white rounded-2xl p-4 hover:shadow-2xl transition-all">
                <IoMdColorWand color="#F7DF1E" />
                <p className="font-bold text-xl">UI/UX</p>
                <p>Experience with tools like Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default About;
