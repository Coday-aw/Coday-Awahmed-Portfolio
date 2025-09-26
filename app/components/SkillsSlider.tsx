import { motion } from "framer-motion";
import { skills } from "../lib/data";

const SkillsSlider = () => {
  // Triple the skills array for seamless infinite scroll
  const infiniteSkills = [...skills, ...skills, ...skills];

  return (
    <div className="max-w-lg mx-auto overflow-hidden mt-20">
      <motion.div
        className="flex space-x-6 whitespace-nowrap"
        animate={{
          x: [-126 * skills.length, -126 * skills.length * 2],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {infiniteSkills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="flex flex-col items-center space-y-2 flex-shrink-0 w-[120px]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill.emoji ? <skill.emoji color={skill.color} size={40} /> : null}
            <span className="text-sm font-medium text-gray-700 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSlider;
