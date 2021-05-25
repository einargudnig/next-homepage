import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Sun, Moon } from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";

import Email from "./Email";
import Social from "./Social";

import { currentDayName } from "../utils/dateUtils";

const menu = [
  {
    path: "/",
    number: "01. ",
    name: "Start",
  },
  {
    path: "/about",
    number: "02. ",
    name: "About",
  },
  {
    path: "/uses",
    number: "03. ",
    name: "Uses",
  },
];
const SHORTCUTS = ["Digit1", "Digit2", "Digit3"];
const SALUTS = [
  "Hey you.",
  "Welcome.",
  "Howdy.",
  "Ahoy!",
  `What's up?`,
  `How's life?`,
  "👋",
  "Long time no see.",
  "Yo!",
  "Hiya!",
  `G'day mate!`,
  "Sup?",
];

function Layout({ children, isHomepage, secondaryPage }) {
  const router = useRouter();
  const onLoadTheme =
    typeof localStorage !== "undefined" && localStorage.getItem("BLOG_THEME");
  const [theme, setTheme] = useState(onLoadTheme);
  const [mounted, setMounted] = useState(false);
  const [salut] = useState(SALUTS[Math.floor(Math.random() * SALUTS.length)]);
  const switchTheme = () => {
    const setTo = theme === "dark" ? "light" : "dark";

    setTheme(setTo);
  };

  function triggerShortcut(e) {
    if (SHORTCUTS.includes(e.code)) {
      // Split code to get only the number
      const code = e.code.split("t")[1];

      // Get route from menu
      const { path } = menu[code];

      router.push(path);
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", triggerShortcut);

    if (onLoadTheme) return;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("BLOG_THEME", theme);

    setMounted(true);
  }, [theme]);

  const containerProps = {
    ...(isHomepage && { md: 8, mdOffset: 2 }),
    ...(!isHomepage && { md: 8, mdOffset: 2 }),
  };

  if (!mounted) return <div />;

  return (
    <>
      {/* Navbar */}
      <div className="top-menu">
        <Row>
          <Col xs={10}>
            <ul>
              <li className="logo">
                <Link href="/" as="/">
                  <a>
                    <span>&lt;Einar&gt;</span>
                  </a>
                </Link>
              </li>

              {menu.map(({ path, name, number }) => (
                <li key={name}>
                  <Link href={path} as={path}>
                    <a>
                      <span className="number">{number}</span>
                      <span>{name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Dark theme Button */}
          <Col xs={2} style={{ textAlign: "right" }}>
            <button
              className="theme-switch-button"
              onClick={() => switchTheme()}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </Col>
        </Row>
      </div>
      {/* End of Navbar */}

      <Grid>
        {/* <Email /> */}
        <Row>
          <Col {...containerProps}>
            {!secondaryPage && (
              <div style={{ textAlign: "center" }}>
                {/* <h1 className="blog-title">{salut}</h1> */}
                <h1 className="blog-title">
                  <span className="blog-title-text">Hello!</span>
                  <span className="blog-title-emoji">👋</span>
                </h1>

                <p className="entry-description">
                  Collection of thoughts, wanderings, reflections & everything
                  in between.
                </p>
              </div>
            )}

            {children}

            {secondaryPage && (
              <div className="bottom-mobile-nav">
                <Row>
                  <Col xs={6} />

                  <Col xs={6}>
                    <button
                      className="theme-switch-button-mobile"
                      onClick={() => switchTheme()}
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun /> Light
                        </>
                      ) : (
                        <>
                          <Moon /> Dark
                        </>
                      )}
                    </button>
                  </Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Grid>

      <footer>
        <div className="footer-container">
          <div>
            <Social />
          </div>
          <div>Einar Guðni | Have a good {currentDayName()}!</div>
          {/* <div>&copy; {new Date().getFullYear()}</div> */}
        </div>
      </footer>
    </>
  );
}

export default Layout;
