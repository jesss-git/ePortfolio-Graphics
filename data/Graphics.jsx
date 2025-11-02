import React from "react";
import { ProjectGallery } from "eportfolio-shared";
import "./Graphics.css"

import typeAndFormFinal from "../assets/Images/FINE228-TypeAndForm/TypeAndFormFinal.png";
import carson1 from "../assets/Images/FINE228-TypeAndForm/carson1.png";
import jin1 from "../assets/Images/FINE228-TypeAndForm/Jin1.png";
import jin2 from "../assets/Images/FINE228-TypeAndForm/Jin2.png";
import jin3 from "../assets/Images/FINE228-TypeAndForm/Jin3.png";
import threed1 from "../assets/Images/FINE228-TypeAndForm/3d1.png";
import ana1 from  "../assets/Images/FINE228-TypeAndForm/ana1.png";
import ana2 from  "../assets/Images/FINE228-TypeAndForm/ana2.png";
import ana3 from  "../assets/Images/FINE228-TypeAndForm/ana3.png";
import ana4 from  "../assets/Images/FINE228-TypeAndForm/ana4.png";
import ana5 from  "../assets/Images/FINE228-TypeAndForm/ana5.png";
import ana6 from  "../assets/Images/FINE228-TypeAndForm/ana6.png";
import rough1 from "../assets/Images/FINE228-TypeAndForm/Rough1.jpg";
import rough2 from "../assets/Images/FINE228-TypeAndForm/Rough2.jpg";
import rough3 from "../assets/Images/FINE228-TypeAndForm/Rough3.jpg";
import rough4 from "../assets/Images/FINE228-TypeAndForm/Rough4.jpg";

export default function Graphics() {
  const GraphicsProjects = [
    {
      id: 1,
      image: typeAndFormFinal,
      title: "Type and Form",
      date: "November 2023",
      description: "Exploring typography through visuals.",
      tags: ["Illustrator"],
      sections: [
        {
          images: [
            typeAndFormFinal,
          ]
        },
        {
          heading: "Artist Statement",
          text: [
            "As this was the final project, I wanted to create something more personal. I also wanted to work with glass and etching with this piece, but unfortunately, I didn't have enough time. I related my project to spirit animals that represented me and who I believe I am, these included a wolf, eagle, and raven. I used type within the animals to help create details, flow, and texture within them. I also chose to create my own hand drawn fonts for this piece because I felt it gave me more freedom and helped me create the flows I wanted within the piece. I also chose to use sans serif instead of serif because it allows me to imitate the flow of the fur and feathers within the piece, whereas serif has little tails/feet that make them feel more abrupt.",
          ],
        },
        {
          heading: "Experimentation and Process Work"
        },
        {
          heading: "Introduction",
          text: [
            "As an introduction to the project, we were asked to do research on various artists who used typography within their work and present it in class the next day. While conducting research, one artist that really caught my eye was Peter Strain. I thought his work was very interesting as he mostly used references from books and movies. He would take important quotes and themes from these various forms of media and incorporate them into his work. He would create various text and typography to try and mimic the theme of the various movies or books he weas portraying through his work. In addiiton to this, he also includes very small details within his work and also allow the typography to help enhance such details and use typography to help guide the eyes of the audience.",
          ],
        },
        {
          heading: "Inspirations",
          text: [
            "As a class, we went through all the artists we researched and were introduced to more artists. There were some really cool artists and concepts that were presented. Due to this, I really wanted to do more research and look into more of the artists and their work.",
          ],
        },
        {
          heading: "Further Research"
        },
        {
          heading: "David Carson",
          images: [
            carson1,
          ],
        },
        {
          text: [
            "I also looked into other various artists and their works including...",
            "▸ Caleb Ekeroth",
            "▸ Noah Camp - https://www.noahcamp.com/3d-art?category=Typography",
            "▸ Lex Wilson - https://lexwilson.co.uk/",
            "▸ Sarah King - https://www.sarahaking.com/",
            "▸ Kendall Ross",
            "▸ Amber Goldhammer - https://www.ambergoldhammer.com/",
            "▸ Laura Meseguer - https://www.laurameseguer.com/",
            "▸ Gwan Woo Jin",
          ],
        },
        {
          images: [
            jin1,
            jin2,
          ],
        },
        {
          images: [
            jin3,
          ],
        },
        {
          heading: "Interesting Techniques",
        },
        {
          heading: "3D Typography",
          text: [
            "▸ Using Photoshop and Illustrator to create cool 3D effects",
            "▸ This can also create some very cool textures and details within the typography",
            "▸ I can use the various tools to help the word mimic 3D effects that we see in the world around us",
          ],
          images: [
            threed1
          ],
        },
        {
          heading: "Anamorphic Typography",
          text: [
            "▸ I was really intrigued by Lex Wilson's work",
            "▸ She used anamorphism within some of her works - this was very interesting because she created typography and incorporated anamorphism and created a very interesting '3D' effect",
            "▸ One cool thing about anamorphism is that you can create things and it can look different based on the perspective the audience is looking at it from",
            "▸ I feel this is a very interesting concept and it would be cool to see if it'd be possible to have a collective set of words looking at it from one perspective and then an opposition set of words when looking at it from a different angle",
            "▸ This feels extremely difficult to do and I am not quite sure how to approach it...",
            "Below are some examples of anamorphic artwork, not necessarily typographical..."
          ],
          images: [
            ana1,
            ana2,
          ],
        },
        {
          text: [
            "▸ What may not be noticeable at first glance is that it is actually the same scuplture, just looked at from different perspectives",
            "▸ I thought this effect was extremely interesting and a cool concept to explore",
            "▸ I am just not sure how they approached creating this",
          ],
        },
        {
          images: [
            ana3,
            ana4,
            ana5,
            ana6,
          ],
        },
        {
          heading: "Medium",
          text: [
            "▸ Painting",
            "▸ Digital",
            "▸ Vinyl or Etching",
            "▸ Traditional Drawing",
            "▸ Embroidery",
            "▸ Crochet and Wire",
          ],
        },
        {
          heading: "Vinyl and Etching",
          text: [
            "▸ Typography is often very direct, literal, and explicit",
            "▸ I am curious to see how etching (a fadedness) will influence the typography within the work",
          ],
        },
        {
          heading: "Crochet and Wire",
          text: [
            "▸ Although I was initially very intrigued with this concept, I just didn't have enough time to spend investigating the possibilities",
            "▸ I initially tried working with wire alone and shaping the wire before crocheting around it. With this, I really didn't like that the curves in the typography I was making weren't very smooth as this was the first time I worked with wire. There were many weird bumps in the wire when creating the text that I just didn't find it pleasing. It looked very abstract and the extra bends in the wire also caused it to look messy, abstract, and very distracting, making it difficult to identify the text I was trying to create",
            "▸ If I had more time for this project, I would have liked to explore this optiokn more, creating a 3D typography piece, which I thought would have been pretty cool",
            "▸ I might just play around with this concept on my own time though!",
          ],
        },
        {
          heading: "Project Ideas",
          text: [
            "▸ Inspired by Peter Strain",
            "▸ Hunger Games quote - 'May the odds be ever in your favour'",
            "▸ Hunger Games quote - 'She was too young, too gentle, and I couldn't save her. I'm sorry'",
            "▸ I could try recreating the scene with Katniss placing white daisies around Rue - symbolizing purity and innocence and youth, almost as though it is a tribute to Rue. Surrounding Rue, there could be white daises and mockingbirds. The mockingbirds represent hope and become a symbol of hope for the districts within the hunger games. Daises represent the youthfulness of Rue and how she weas too young and too innocent to be participating in the games.",
          ],
          images: [
            rough4,
          ],
        },
        {
          text: [
            "▸ Hunger Games quote - 'Hope. It is the only thing stronger than fear.'",
            "▸ This is a quote by President Snow. He sees the mockingjay as a symbol of hope for people. However, he believes in order to rule and keep order within the districts, he needs to impose fear. Throughout the movie series, he becomes a symbol of fear and his white roses embody this as well.",
            "▸ Another idea I had was creating an entire canvas of flowers (roses in particular) with a couple mockingjays scattered around them.",
            "▸ The roses would represent fear and would have text and typography in them.",
            "▸ The mockingjays would represent the hope that Katniss is giving the people and would be filled with the text 'hope'.",
          ],
          images: [
            rough3,
          ],
        },
        {
          text: [
            "Some other popular books or movies series that could be replicated are...",
            "▸ Peter Pan - 'All the world is made of faith, and trust, and pixie dust'",
            "▸ Percy Jackson - I could have symbols that represent the Greek Gods as a form of typography' in other words, typography creates the image of a symbol for each of the Gods",
            "▸ Harry Potter Golden Snitch - 'I open at the close'",
            "▸ Disney Quotes (Mulan)- 'The flower that blooms in adversity is the most rare and beautiful of all'",
            "▸ Disney Quotes (Lion King) - 'Remember who you are'",
            "▸ Disney Quotes - 'Laughter is timeless, imagination has no age, and dreams are forever'",
            "▸ Disney Quotes - 'All our dreams can come true, if we have the courage to pursue them'",
            "▸ Disney Quotes - 'The very things that hold you down are going to lift you up'",
            "▸ Disney Quotes - 'Dreams only exist to be made to come true'",
            "After meeting with Lucy and Jill (the Prof and TA), and showing them some of the ideas I wanted to pursue with this project, they indicated that they were most intrigued by the lettering within the flower and petals and suggested that I focus on that. With this in mind, I wanted to play around with that concept a little bit more...",
          ],
          images: [
            rough1,
            rough2,
          ],
        },
        {
          text: [
            "▸ With this, I really liked how the crow turned out and the effect the words and typography gave it",
            "▸ I also wanted to try free handing the text, rather than using a text that already exists",
            "▸ As a result, I wanted to explore this further with the final project",
          ],
        },
        {
          heading: "Final Piece",
          text: [
            "▸ With this final project, I really wanted to work with glass and etching",
            "▸ Also, since it was the last project, I really wanted the project to be a little bit more personal",
            "▸ I ended up coming up with a concept of spirit animals - I thought that etching would create a 'spirit like' effect which would have been cool to see",
            "▸ I began looking at animals and trying to see what I related to - I found the wolf, eagle, and raven",
            "▸ I ended up drawing and sketching mockups on my iPad first - I wanted to see how the typography would flow and how I could create details within the animals using typography",
            "▸ I also thought I could incorporate typography as details within the work - I used it to help provide flow throughout the work. For instance, the typography acts like fur and plumage or feathers",
            "▸ I also chose to hand draw the words and typography because it gave me more freedom and flexibility. It also allowed me to reach spaces within the animals",
            "▸ I also chose a sans serif font because it helps create the flow I wanted to create through the project - I thought that having a serif font would have been too rigid for the work, creating abruptness within the texture of the animals",
            "This is the drawing I created on my iPad as a mockup for the final piece...",
          ],
          images: [
            typeAndFormFinal,
          ],
        },
      ],
    },
    {
      id: 2,
      image: typeAndFormFinal,
      title: "Graphics Prroj 2",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 3,
      image: typeAndFormFinal,
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
          backgroundImage: `url(${typeAndFormFinal})`, 
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
