import React from "react";
import Section from "../common/Section";
import CSS from "../assets/CSS.png";
import HTML from "../assets/HTML.png";
import Javascript from "../assets/Javascript.png";
import Nextjs from "../assets/Nextjs.png";
import Reactjs from "../assets/Reactjs.png";
import Tailwind from "../assets/Tailwind.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      Image: CSS,
      title: "CSS",
    },
    {
      id: 2,
      Image: HTML,
      title: "HTML",
    },
    {
      id: 3,
      Image: Javascript,
      title: "Javascript",
    },
    {
      id: 3,
      Image: Nextjs,
      title: "Nextjs",
    },
    {
      id: 3,
      Image: Reactjs,
      title: "Reactjs",
    },
    {
      id: 3,
      Image: Tailwind,
      title: "Tailwind",
    },
  ];
  return (
    <Section title="Skills 💻" subtitle="Here are some of my skills">
      <div className="flex gap-10 lg:grid-flow-row ">
        {skills.map(({ id, Image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={Image}
              alt={title}
              className="w-36 h-36 md:w-44 md:h-44 object-contain"
            />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
