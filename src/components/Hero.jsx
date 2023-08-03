import React from "react";
import { FaLinkedin, FaArrowDown, FaInstagram, FaGithub } from "react-icons/fa";
import a from "../assets/a.jpg";
const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/viet-vu-81b68b210/",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/vviet161/",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      link: "https://github.com/Zabimaru161",
      icon: <FaGithub />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");
    if (this.scrollY >= 200) downArrow.classList.add("hidden-down-arrow");
    else downArrow.classList.remove("hidden-down-arrow");
  });
  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-orange-600 uppercase font-bold">Viet Vu</h2>
      <h3 className="py-3 text-2xl">Front-end Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        hello <span className="animate-pulse text-4xl">👋</span>
        I'm Viet. I have good communication skills, a strong love for
        programming, and a rapid rate of learning. I'm good at front-end
        technologies.
      </p>

      {/* social icons */}

      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-orange-600"
          >
            {icon}
          </a>
        ))}
      </div>
      {/* avatar and cv */}
      <div>
        <img
          src={a}
          alt="avatar"
          className="w-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b rounded-xl pt-5"
        />
        <a
          href="/Cover Letter.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-orange-600 to-teal-500 text-white py-2 rounded-lg"
        >
          Cover letter and CV
        </a>
      </div>
      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
