import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm Sach Thadani, a cse undergrad student. Currently, 
                I am pursuing Computer Science with specialization in CPS.
                I love to create machine learning models and desing webites. 
                I use HTML,CSS,Javascript,Tailwind and React to create my webites. 
                I am also well versed with Data Structures and Algorithms.
        </p>

        <br />

        <p className="text-xl">
         I love watching sports especially cricket and badminton. 
                That is like one of my favourite things to do in between breaks.
                Apart from that I also like to play Chess whenever I am able to find time.

        </p>
      </div>
    </div>
  );
};

export default About;



