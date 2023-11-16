import "./styles/logo.css";

import INFO from "../../data/user";
import { Link } from "react-router-dom";
import Logos from "../../assets/logo.jpg";
import React from "react";

const Logo = (props) => {
  let { width, link } = props;

  if (link === undefined) {
    link = true;
  }

  const imageElement = (
    <img src={Logos} alt="logo" className="logo" width={width} />
  );

  return (
    <React.Fragment>
      {link ? <Link to="/">{imageElement}</Link> : imageElement}
    </React.Fragment>
  );
};

export default Logo;
