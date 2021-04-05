import React from "react";

import Layout from "../components/Layout";
import { USES } from "../constants/Uses";

function Uses({ og }) {
  return (
    <>
      <Layout secondaryPage>
        <h1 className="main-h1">What I use.</h1>

        <div className="uses-intro">
          I've seen similar lists flying around and liked the idea.
          <br />
          This is also a fun way to see how my setup and development environmet
          changes over time.
        </div>

        {USES.map(({ title, stack }) => (
          <ul className="uses-list" key={title}>
            <li className="head">{title}</li>

            {stack.map(({ name, description, link }) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {name}
                </a>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        ))}
      </Layout>
    </>
  );
}

Uses.getInitialProps = () => {
  return {
    data: {
      og: {
        description: "What I use currently on my journey",
        image:
          "https://res.cloudinary.com/dik9usnqz/image/upload/v1617643492/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg",
      },
    },
  };
};

export default Uses;
