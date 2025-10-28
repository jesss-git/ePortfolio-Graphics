import React from "react";
import { ProjectGallery } from "eportfolio-shared";
import "./Graphics.css"
import heroImg from "../assets/Images/geeseInvasion.png"

export default function Graphics() {
  const GraphicsProjects = [
    {
      id: 1,
      image: heroImg,
      title: "Graphics Prroj 1",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 2,
      image: heroImg,
      title: "Graphics Prroj 2",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 3,
      image: heroImg,
      title: "Graphics Prroj 3",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
  ];

  return (
    <>
      <section
        className="codehero"
        style={{
          backgroundImage: `url(${heroImg})`, 
        }}
      ></section>


      <ProjectGallery
        title="Featured Graphics Projects"
        subtitle="Apps, tools, and experiments inspired by climbing and nature."
        projects={GraphicsProjects}
      />
    </>
  );
}
