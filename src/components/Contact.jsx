import React from "react";
import Section from "../common/Section";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import contact from "../assets/contact.png";

const Contact = () => {
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
  ];
  return (
    <Section
      title="Contact ☎️"
      subtitle="These are the way you can get in touch with me. Hope to hear from you soon😆 "
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <img src={contact} alt="contact info" className="w-32 h-32" />
        </div>
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight">
            I am open to talk regarding freelancing or full-time opportunities.
            Fell free to contact me using your preferrend medium.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-in-out hover:text-orange-600"
            >
              {icon}
            </a>
          ))}
        </div>
        {/* bottom form */}
        <div className="p-8 text-left w-full flex items-center justify-center">
          <form
            action="https://getform.io/f/e2569314-3e38-4c7a-a313-6b567f7ab51a"
            method="POST"
          >
            <div className=" w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                {" "}
                <label className="capitalize text-sm py-2 font-extralight">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                {" "}
                <label className="capitalize text-sm py-2 font-extralight">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <label className="capitalize text-sm py-2 font-extralight">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none "
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-orange-600 to-teal-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
