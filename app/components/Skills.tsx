import { skills } from "../lib/data";

const Skills = () => {
  return (
    <div
      data-animate
      className="flex flex-row flex-wrap justify-center items-center gap-4  transition-all duration-700 delay-400 m-4"
    >
      <p className="text-4xl w-full mt-40 sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent transition-all duration-700 ">
        Tech Stack
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-gray-50 p-6 flex flex-col justify-center items-center rounded-2xl text-center hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-gray-100"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-3xl mb-2">
              {skill.emoji ? <skill.emoji color={skill.color} /> : null}
            </div>
            <div className="text-sm font-medium text-gray-700">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
