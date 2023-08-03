import React from "react";
import Section from "../common/Section";
import spartan from "../assets/spartan.png";
import assassin from "../assets/assassin.png";
import GenghisKhan from "../assets/GenghisKhan.png";
import napoleon from "../assets/napoleon.png";

const Aphorism = () => {
  const APHORISM = [
    {
      id: 1,
      image: spartan,
      name: "Leonidas",
      comment: "I will not quit in the midst of struggle",
    },
    {
      id: 2,
      image: assassin,
      name: "Ezio",
      comment:
        "The wisdom of our creed is revealed through these words. We work in the dark to serve the light, we are assassins. Nothing is true, everything is permitted",
    },
    {
      id: 3,
      image: GenghisKhan,
      name: "Genghis Khan",
      comment:
        "Not even a mighty warrior can brake a frail arrow when it is multiplied and supported by its fellows. As long as you brothers support one another and assist one another, your enemies can never gain victory over you.",
    },
    {
      id: 4,
      image: napoleon,
      name: "Napoleon",
      comment:
        "If you build an army of 100 lions and their leader is a dog, in any fight, the lions will die like a dog. But if you build an army of 100 dogs and their leader is a lion, all dogs will fight like a lion.",
    },
  ];
  return (
    <Section
      title="Aphorism 🗯"
      subtitle="Some Aphorism I love. They have an uncanny ability to encapsulate complex thoughts and emotions into just a few words, making them powerful and impactful. Whether it's a line from a famous author, a thought-provoking statement from a philosopher, or a simple yet heartfelt saying from an anonymous source, each quote has its own unique charm and depth."
    >
      <div className="max-w-xl flex flex-col gap-8">
        {APHORISM.map(({ image, name, comment }) => (
          <div className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
            <div className="w-1/3">
              <img
                src={image}
                alt={name}
                className="w-30 h-30 object-cover object-top pt-2 "
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm font-extralight">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Aphorism;
