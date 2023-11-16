import "./styles/works.css";

import Card from "../common/card";
import GyanLogo from "../../assets/gyan.png";
import React from "react";
import VividLogo from "../../assets/vivid_logo.png";
import Xbi4Logo from "../../assets/xbi4_logo.png";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            <div className="work">
              <img src={VividLogo} alt="vivid" className="work-image" />
              <div className="work-title">Vivid Trans Tech Solutions India</div>
              <div className="work-subtitle">Senior Software Developer</div>
              <div className="work-duration">2023 May - Present</div>
            </div>

            <div className="work">
              <img src={Xbi4Logo} alt="xbi4" className="work-image" />
              <div className="work-title">XBI4</div>
              <div className="work-subtitle">Associate Developer</div>
              <div className="work-duration">2020 - 2023</div>
            </div>

            <div className="work">
              <img src={GyanLogo} alt="gyan" className="work-image" />
              <div className="work-title">Gyan Matrix</div>
              <div className="work-subtitle">Intern Software Architect</div>
              <div className="work-duration">2019 - 2020</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
