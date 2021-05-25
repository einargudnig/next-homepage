import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import { srConfig } from "../utils/config";
import { KEY_CODES } from "../utils/index";
// import sr from "../utils/sr";
import { jobs } from "../constants/Jobs";

import "../styles/experience.css";

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
