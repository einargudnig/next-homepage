import { useState, useEffect, useRef } from "react";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { Icon } from "./Icons";
import { projects } from "../constants/Projects";

import "../styles/projects.css";

// const div className="projects-section" = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   h2 {
//     font-size: clamp(24px, 5vw, var(--fz-heading));
//   }
//   .archive-link {
//     font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
//     font-size: var(--fz-sm);
//     &:after {
//       bottom: 0.1em;
//     }
//   }
//   .projects-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     grid-gap: 15px;
//     position: relative;
//     margin-top: 50px;
//     @media (max-width: 1080px) {
//       grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     }
//   }
//   .more-button {
//     color: var(--secondary-color);
//     background-color: transparent;
//     border: 1px solid var(--secondary-color);
//     border-radius: var(--border-radius);
//     font-size: var(--fz-xs);
//     font-family: SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
//     line-height: 1;
//     text-decoration: none;
//     cursor: pointer;
//     transition: var(--transition);
//     padding: 1.25rem 1.75rem;
//     &:hover,
//     &:focus,
//     &:active {
//       background-color: var(--secondary-color);
//       outline: none;
//     }
//     &:after {
//       display: none !important;
//     }
//     margin: 80px auto 0;
//   }
// `;

// const StyledProject = styled.div`
//   cursor: default;
//   transition: var(--transition);
//   &:hover,
//   &:focus {
//     outline: 0;
//     .project-inner {
//       transform: translateY(-5px);
//     }
//   }
//   .project-inner {
//     box-shadow: 0 10px 30px -15px var(--background-color-secondary);
//     transition: var(--transition);
//     &:hover,
//     &:focus {
//       box-shadow: 0 20px 30px -15px var(--background-color-secondary);
//     }
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     align-items: flex-start;
//     position: relative;
//     height: 100%;
//     padding: 2rem 1.75rem;
//     border-radius: var(--border-radius);
//     background-color: var(--background-color-secondary);
//     transition: var(--transition);
//   }
//   .project-top {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 35px;
//     .folder {
//       color: var(--secondary-color);
//       svg {
//         width: 40px;
//         height: 40px;
//       }
//     }
//     .project-links {
//       display: flex;
//       align-items: center;
//       margin-right: -10px;
//       color: var(--text-main-color);
//       a {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         padding: 5px 7px;
//         &.external {
//           svg {
//             width: 22px;
//             height: 22px;
//             margin-top: -4px;
//           }
//         }
//         svg {
//           width: 20px;
//           height: 20px;
//         }
//       }
//     }
//   }
//   .project-title {
//     margin: 0 0 10px;
//     color: var(--text-color-main);
//     font-size: var(--fz-xxl);
//   }
//   .project-description {
//     color: var(--text-color-main);
//     font-size: 17px;
//     a {
//       display: inline-block;
//       text-decoration: none;
//       text-decoration-skip-ink: auto;
//       position: relative;
//       transition: var(--transition);
//       cursor: pointer;
//       color: var(--secondary-color);
//       &:hover,
//       &:focus,
//       &:active {
//         color: var(--secondary-color);
//         outline: 0;
//         &:after {
//           width: 100%;
//         }
//         & > * {
//           color: var(--secondary-color) !important;
//           transition: var(--transition);
//         }
//       }
//       &:after {
//         content: "";
//         display: block;
//         width: 0;
//         height: 1px;
//         position: relative;
//         bottom: 0.37em;
//         background-color: var(--secondary-color);
//         transition: var(--transition);
//         opacity: 0.5;
//       }
//     }
//   }
//   .project-tech-list {
//     display: flex;
//     align-items: flex-end;
//     color: var(--secondary-color);
//     flex-grow: 1;
//     flex-wrap: wrap;
//     padding: 0;
//     margin: 20px 0 0 0;
//     list-style: none;
//     li {
//       color: var(--text-color-main);
//       font-family: var(--font-mono);
//       font-size: var(--fz-xxs);
//       line-height: 1.75;
//       &:not(:last-of-type) {
//         margin-right: 15px;
//       }
//     }
//   }
// `;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const projectsData = projects;

  return (
    <div className="projects-section">
      <TransitionGroup className="projects-grid">
        {projectsData &&
          projectsData.map(
            (
              {
                date,
                title,
                github,
                external,
                tech1,
                tech2,
                tech3,
                company,
                text,
              },
              i
            ) => {
              const bigTech = [tech1, tech2, tech3];

              return (
                <div className="project" key={i} tabIndex="0">
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <Icon name="Folder" />
                        </div>
                        <div className="project-links">
                          {github && (
                            <a href={github} aria-label="GitHub Link">
                              <Icon name="GitHub" />
                            </a>
                          )}
                          {external && (
                            <a
                              href={external}
                              aria-label="External Link"
                              className="external"
                            >
                              <Icon name="External" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="project-title">{title}</h3>

                      <div
                        className="project-description"
                        dangerouslySetInnerHTML={{ __html: text }}
                      />
                    </header>

                    <footer className="tech-footer">
                      {bigTech && (
                        <ul className="project-tech-list">
                          {bigTech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      )}
                    </footer>
                  </div>
                </div>
              );
            }
          )}
      </TransitionGroup>
    </div>
  );
};

export default Projects;
