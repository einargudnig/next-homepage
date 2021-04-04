import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import { srConfig } from "../utils/config";
import { KEY_CODES } from "../utils/index";
// import sr from "../utils/sr";
import { jobs } from "../constants/Jobs";

import "../styles/experience.css";

// const div className="job-section" = styled.section`
//   max-width: 700px;
//   .inner {
//     display: flex;
//     @media (max-width: 600px) {
//       display: block;
//     }
//   }
// `;/

// const StyledTabList = styled.ul`
//   position: relative;
//   z-index: 3;
//   width: max-content;
//   padding: 0;
//   margin: 0;
//   list-style: none;
//   @media (max-width: 600px) {
//     display: flex;
//     overflow-x: auto;
//     width: calc(100% + 100px);
//     margin-left: -50px;
//     margin-bottom: 30px;
//   }
//   @media (max-width: 480px) {
//     width: calc(100% + 50px);
//     margin-left: -25px;
//   }
//   li {
//     &:first-of-type {
//       @media (max-width: 600px) {
//         margin-left: 50px;
//       }
//       @media (max-width: 480px) {
//         margin-left: 25px;
//       }
//     }
//     &:last-of-type {
//       @media (max-width: 600px) {
//         padding-right: 50px;
//       }
//       @media (max-width: 480px) {
//         padding-right: 25px;
//       }
//     }
//   }
// `;

// const StyledTabButton = styled.button`
//   display: inline-block;
//   text-decoration: none;
//   text-decoration-skip-ink: auto;
//   color: inherit;
//   position: relative;
//   transition: var(--transition);
//   cursor: pointer;
//   &:hover,
//   &:active,
//   &:focus {
//     color: var(--secondary-color);
//     outline: 0;
//   }
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: var(--tab-height);
//   padding: 0 20px 2px;
//   border-left: 2px solid var(--secondary-color);
//   background-color: transparent;
//   color: ${({ isActive }) =>
//     isActive ? `var(--secondary-color)` : `var(--text-color-main)`};
//   font-family: var(--font-mono);
//   font-size: var(--fz-xs);
//   text-align: left;
//   white-space: nowrap;
//   @media (max-width: 768px) {
//     padding: 0 15px 2px;
//   }
//   @media (max-width: 600px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-width: 120px;
//     padding: 0 15px;
//     border-left: 0;
//     border-bottom: 2px solid var(--background-color-secondary);
//     text-align: center;
//   }
//   &:hover,
//   &:focus {
//     background-color: var(--background-color-secondary);
//   }
// `;

// const StyledHighlight = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 10;
//   width: 2px;
//   height: var(--tab-height);
//   border-radius: var(--border-radius);
//   background: var(--secondary-color);
//   transform: translateY(
//     calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
//   );
//   transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
//   transition-delay: 0.1s;
//   @media (max-width: 600px) {
//     top: auto;
//     bottom: 0;
//     width: 100%;
//     max-width: var(--tab-width);
//     height: 2px;
//     margin-left: 50px;
//     transform: translateX(
//       calc(${({ activeTabId }) => activeTabId} * var(--tab-width))
//     );
//   }
//   @media (max-width: 480px) {
//     margin-left: 25px;
//   }
// `;

// const StyledTabContent = styled.div`
//   width: 100%;
//   height: auto;
//   padding-top: 10px;
//   padding-left: 30px;
//   @media (max-width: 768px) {
//     padding-left: 20px;
//   }
//   @media (max-width: 600px) {
//     padding-left: 0;
//   }
//   ul {
//     padding: 0;
//     margin: 0;
//     list-style: none;
//     font-size: var(--fz-lg);
//     li {
//       color: var(--text-color-main);
//       position: relative;
//       padding-left: 30px;
//       margin-bottom: 10px;
//       &:before {
//         content: "▹";
//         position: absolute;
//         left: 0;
//         color: var(--secondary-color);
//       }
//     }
//   }
//   h3 {
//     margin-bottom: 5px;
//     font-size: var(--fz-xxl);
//     font-weight: 500;
//     .company {
//       color: var(--secondary-color);
//     }
//   }
//   .range {
//     margin-bottom: 30px;
//     color: var(--text-color-secondary);
//     font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
//     font-size: var(--fz-xs);
//   }
// `;

const Experience = () => {
  const jobsData = jobs;
  const [activeTabId, setActiveTapId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  // const revealContainer = useRef(null);
  // useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // if were at the end, go to the start.
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // At the start, move to end.
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    if (e.key === KEY_CODES.ARROW_UP || e.key === KEY_CODES.ARROW_DOWN) {
      e.preventDefault();
      // Move up
      if (e.key === KEY_CODES.ARROW_UP) {
        setTabFocus(tabFocus - 1);
      }
      // Move down
      if (e.key === KEY_CODES.ARROW_DOWN) {
        setTabFocus(tabFocus + 1);
      }
    }
  };

  return (
    <div className="job-section">
      <div className="inner">
        <div className="tab-list" role="tablist" aria-label="Job Tabs">
          {jobsData &&
            jobsData.map(({ company }, i) => {
              return (
                <li key={i}>
                  <div
                    className="tab-button"
                    isActive={activeTabId === i}
                    onClick={() => setActiveTapId(i)}
                    ref={(el) => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}
                    tabIndex={activeTabId === i ? "0" : "-1"}
                  >
                    <span>{company}</span>
                  </div>
                </li>
              );
            })}
          <div className="highlight" activeTabId={activeTabId} />
        </div>
        {jobsData &&
          jobsData.map(
            (
              {
                date,
                title,
                company,
                location,
                range,
                url,
                text1,
                text2,
                text3,
              },
              i
            ) => {
              const bigText = [text1, text2, text3];

              return (
                <div
                  className="tab-content"
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}
                >
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a href={url} className="inline-link">
                        {company}
                      </a>
                    </span>
                  </h3>

                  <p className="range">{range}</p>

                  <div>
                    <ul className="skills-list">
                      {bigText &&
                        bigText.map((text, i) => <li key={i}>{text}</li>)}
                    </ul>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Experience;
