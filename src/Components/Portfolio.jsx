/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desbook pile";
const imageAltText = "table with books";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Haunted Office",
    description:
      "3D Model of a Pre-partition Constructed Studio's Office room in a timeline of Demise, 3D Enivronment.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_style-3dart-art-activity-7091051890129387520-yDYZ?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Game",
    description:
      "Parkour Game Prototype in Unity.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_csharp-csharpdeveloper-csharpprogramming-activity-7085965267821809665-4YjH?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Promises (A forgotten Reality)",
    description:
      "3D Model of the beautiful Pre-Partition St.Matthews Church in Nathia Gali, Pakistan.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_majority-minority-india-activity-7084243006458867712-eZYB?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Street Sewang (3D Model)",
    description:
      "An incomplete story awaiting its justice. Time has passed but, People haven't changed.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_blender-3d-modeling-activity-7082343453837160448-_2gh?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "3D Model of Taj Mahal",
    description:
      "3D Model of the iconic Landmark of Agra called Taj Mahal in Utterpradesh, India.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_india-agra-tajmahal-activity-7080135301930573824-3-bh?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Partition (1947)",
    description:
      "A story filled with trauma and distrust.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_blender-3d-modeling-activity-7071882973469392896-Tgu_?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Avatar",
    description:
      "3D Model of my Avatar.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_avatar-character-3d-activity-7088447430983077889-rMum?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Cartoonish Shoes",
    description:
      "3D Model of a pair of Cute and Cartoonish Shoes.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_style-3dart-art-activity-7092916200761913344-szZj?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Character",
    description:
      "A Rigged 3D Character ready to be animated.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_style-3dart-art-activity-7093198187074662400-Z-7d?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Breakfast Scene",
    description:
      "Lowpoly 3D Model of a Breakfast Scene Environment.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_design-scene-3d-activity-7070448798048657408-96BO?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Badshahi Masjid",
    description:
      "A Lowpoly 3D Model of the iconic landmark of Lahore called Badshahi Masjid og the Mughals.",
    url: "https://www.linkedin.com/posts/nabeel-zaheer_muqarna-mughal-architecture-activity-7069329828922990592-5OKa?utm_source=share&utm_medium=member_desktop",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
