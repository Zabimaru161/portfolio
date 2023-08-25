import React from "react";
import Section from "../common/Section";
import chat from "../assets/chat.png";
import todo from "../assets/todo.png";
import poke from "../assets/poke.png";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
const Project = () => {
  const pet = [
    {
      id: 1,
      image: chat,
      title: "Chatting",
      github: "https://github.com/Zabimaru161/Chatting-",
      Demo: "https://chatting-lilac.vercel.app/",
    },
    {
      id: 1,
      image: todo,
      title: "Things to do",
      github: "https://github.com/Zabimaru161/Dolist",
      Demo: "https://dolist-blue.vercel.app/",
    },
    {
      id: 1,
      image: poke,
      title: "Search your pokemon",
      github: "https://github.com/Zabimaru161/pokedex",
      Demo: "https://pokedex-mu-gold.vercel.app/",
    },
  ];
  return (
    <Section
      title="Project 🔨"
      subtitle="ajsafdljasjsafsafjsafjlsadjlsafjlsafjlksafjlsfljksafjlk"
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {pet.map(({ id, title, image, github, Demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={Demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Project;
