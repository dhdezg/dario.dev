import React from "react";
import myPhoto from "../assets/myPhoto.png";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_Dario_HdezG.pdf";
    link.download = "CV_Dario_HdezG.pdf";
    link.click();
  };
  //REVIEW THIS CODE
  const handleContactClick = () => {
    if (window.innerWidth <= 768) {
      window.location.href = "tel:+34653316411";
    } else {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      className="font-urbanist pt-24 pr-4 pl-4 justify-center justify-items-center items-center min-h-screen flex gap-8 bg-slate-200 dark:bg-slate-950"
    >
      <section className="flex flex-col justify-center justify-items-center gap-8">
        <h1 className="font-comfortaa text-6xl font-bold dark:text-gray-200">
          Darío Hernández
        </h1>
        <h4 className="text-xl dark:text-gray-200">Front End Developer</h4>

        <div
          id="about__buttons"
          className="flex gap-4 justify-center text-nowrap"
        >
          <button
            onClick={handleDownloadCV}
            className="bg-slate-50 hover:bg-blue-500 dark:hover:bg-blue-500 hover:scale-105 dark:bg-slate-800 dark:hover:text-black rounded-full p-2 overflow-hidden box-border dark:text-gray-200 w-1/4"
          >
            CV 📃
          </button>
          <button
            onClick={handleContactClick}
            className="bg-transparent hover:bg-lime-300 hover:dark:text-black hover:animate-vibrate rounded-full p-2 overflow-hidden box-border dark:text-gray-200 w-1/4"
          >
            Contact me 📲
          </button>
        </div>
      </section>
      <section id="my-photo" className="relative z-0">
        <img
          src={myPhoto}
          alt="Dario Hernandez"
          className="w-64 h-64 md:w-80 md:h-80 filter grayscale drop-shadow-lg object-cover mask-gradient scale-150"
        />
      </section>
    </div>
  );
};

export default About;
