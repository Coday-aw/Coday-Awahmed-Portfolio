import { projectsData } from "../lib/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  project: (typeof projectsData)[number];
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isImageLeft = index % 2 === 0;
  return (
    <div className={`flex gap-10  ${isImageLeft ? "" : "flex-row-reverse"}`}>
      <div>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={300}
          className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-8 items-start">
        <p className="font-bold">{project.title}</p>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-slate-200 px-2 py-1 rounded-2xl hover:bg-blue-500 hover:text-white font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-10">
          <a
            href={project.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 cursor-pointer font-bold"
          >
            Code <FaGithub size={25} />
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 cursor-pointer font-bold"
          >
            live Demo <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
