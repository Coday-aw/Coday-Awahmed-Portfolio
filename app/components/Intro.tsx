import { ChevronDown } from "lucide-react";
interface IntroProps {
  scrollTo: (id: string) => void;
}

const Intro = ({ scrollTo }: IntroProps) => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[rgba(99,102,241,0.1)] to-[rgba(16,185,129,0.1)] min-h-screen flex items-center justify-center relative"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            Hi, I'm Coday Awahmed
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            I'm a Frontend developer with a passion for building web
            applications. I specialize in creating responsive and user-friendly
            interfaces using modern web technologies.
          </p>
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View My Work
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      {/* Floating Elements
      <div
        className="absolute top-1/4 left-1/4 text-4xl animate-bounce"
        style={{ animationDelay: "0s" }}
      >
        ⚡
      </div>
      <div
        className="absolute top-1/3 right-1/4 text-4xl animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        🚀
      </div>
      <div
        className="absolute bottom-1/4 left-1/3 text-4xl animate-bounce"
        style={{ animationDelay: "2s" }}
      >
        💎
      </div> */}
    </section>
  );
};
export default Intro;
