import { motion } from "framer-motion";
import { projectsData } from "../lib/data";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
  projectsInView: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projectsRef, projectsInView }) => {
  return (
    <motion.section
      id="projects"
      ref={projectsRef}
      initial={{ opacity: 0, y: 40 }}
      animate={projectsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-10 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-animate
          className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent transition-all duration-700"
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2  gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Projects;
