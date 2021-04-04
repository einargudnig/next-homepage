import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-flexbox-grid";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";

import Experience from "../components/Experience";
import Projects from "../components/Projects";

const About = () => {
  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="main-h1 about-h1">About me.</h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>
                I graduated as a computer scientist from the University of
                Iceland in the summer of 2020. I live in in Reykjavík, Iceland.
                <br />
                <br />
                I enjoy creating different things, whether that be websites,
                application or anything in between.
                <br />
                I'm very dedicated to learn new things and do truly belive that
                you should never stop learning.
                <br />
              </Col>
            </Row>
            <hr />
            <h1 className="main-h1 about-h1">Experience.</h1>
            <Row style={{ marginTop: 30 }}>
              <Experience />
            </Row>
            <hr />
            <h1 className="main-h1 about-h1">Projects.</h1>
            <Row style={{ marginTop: 30 }}>
              <Projects />
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
