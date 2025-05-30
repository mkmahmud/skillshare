import FillButton from "@/components/buttons/Fill";
import OutlineButton from "@/components/buttons/Outline";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  ">
      <section className="w-full mx-auto py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 opacity-60 rounded-3xl -z-10 blur-lg"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Skills</span>, <br />
          Share <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Knowledge</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Connect with passionate learners and experts. Teach, learn, and grow together in a vibrant skill-sharing community.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          <FillButton texts="Get Started" icon={FaPlus}></FillButton>
          <OutlineButton texts=" Explore Skills" icon={FaArrowRight}></OutlineButton>
        </div>
        {/* Infinite horizontal scrolling categories */}
        <div className="mt-20 overflow-hidden w-full">
          <div
            className="flex gap-4 animate-scroll-categories"
            style={{
              width: "max-content",
              animation: "scroll-categories 30s linear infinite",
            }}
          >
            {[
              { icon: "🎨", label: "Design" },
              { icon: "💻", label: "Coding" },
              { icon: "🎸", label: "Music" },
              { icon: "🗣️", label: "Languages" },
              { icon: "📷", label: "Photography" },
              { icon: "🍳", label: "Cooking" },
              { icon: "🏋️‍♂️", label: "Fitness" },
              { icon: "📚", label: "Writing" },
              { icon: "🎬", label: "Film" },
              { icon: "🎮", label: "Gaming" },
              { icon: "🧘‍♂️", label: "Mindfulness" },
              { icon: "🧵", label: "Crafts" },
              { icon: "🧑‍💼", label: "Business" },
              { icon: "🌱", label: "Gardening" },
              { icon: "🧑‍🎨", label: "Art" },
              { icon: "🎤", label: "Public Speaking" },
              { icon: "🧑‍🔬", label: "Science" },
              { icon: "🧑‍🍳", label: "Baking" },
              { icon: "🎹", label: "Piano" },
              { icon: "🛠️", label: "DIY" },
            ]
              .concat(
          // Duplicate for seamless infinite scroll
          [
            { icon: "🎨", label: "Design" },
            { icon: "💻", label: "Coding" },
            { icon: "🎸", label: "Music" },
            { icon: "🗣️", label: "Languages" },
            { icon: "📷", label: "Photography" },
            { icon: "🍳", label: "Cooking" },
            { icon: "🏋️‍♂️", label: "Fitness" },
            { icon: "📚", label: "Writing" },
            { icon: "🎬", label: "Film" },
            { icon: "🎮", label: "Gaming" },
            { icon: "🧘‍♂️", label: "Mindfulness" },
            { icon: "🧵", label: "Crafts" },
            { icon: "🧑‍💼", label: "Business" },
            { icon: "🌱", label: "Gardening" },
            { icon: "🧑‍🎨", label: "Art" },
            { icon: "🎤", label: "Public Speaking" },
            { icon: "🧑‍🔬", label: "Science" },
            { icon: "🧑‍🍳", label: "Baking" },
            { icon: "🎹", label: "Piano" },
            { icon: "🛠️", label: "DIY" },
          ]
              )
              .map((cat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow px-4 py-2 flex flex-col items-center w-28 hover:bg-blue-50 transition shrink-0"
          >
            <span className="text-2xl mb-1">{cat.icon}</span>
            <span className="font-medium text-gray-800 text-sm">{cat.label}</span>
          </div>
              ))}
          </div>
        </div>

         
      </section>
       
    </main>
  );
}
