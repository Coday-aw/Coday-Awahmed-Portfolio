import { motion } from "framer-motion";
import { projectsData } from "../lib/data";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
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
            <div
              key={project.title}
              data-animate
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 backdrop-blur-sm "
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div>
                <Image
                  width={600}
                  height={400}
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <p className="text-lg font-semibold">{project.title}</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-xs font-semibold border border-indigo-100/50 transform hover:scale-105 transition-transform duration-200"
                      style={{ animationDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.demoUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl group/btn"
                  >
                    <ExternalLink
                      size={16}
                      className="group-hover/btn:rotate-45 transition-transform duration-200"
                    />
                    <span>Live Demo</span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.gitHubUrl}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 border border-gray-200/50 group/btn"
                  >
                    <Github
                      size={16}
                      className="group-hover/btn:rotate-12 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Projects;
