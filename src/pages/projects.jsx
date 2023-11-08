import "./styles/projects.css";

import React, { useEffect } from "react";

import AllProjects from "../components/projects/allProjects";
import Footer from "../components/common/footer";
import { Helmet } from "react-helmet";
import INFO from "../data/user";
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import SEO from "../data/seo";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">
              Technical Excellence, Leadership and Innovation
            </div>

            <div className="subtitle projects-subtitle">
              Throughout my journey, I've undertaken a diverse range of
              projects, each representing a significant milestone in my
              professional growth. My proficiency in a variety of programming
              languages and frameworks empowers me to craft robust,
              user-friendly applications and websites. Guiding teams and leading
              projects with a collaborative spirit is one of my strengths. I've
              successfully managed teams of up to 5 members, ensuring the
              seamless execution of ideas. I'm passionate about creating
              solutions that not only meet but exceed expectations. Whether it's
              a web app or a mobile interface, I thrive on pushing the
              boundaries of what's possible.
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
