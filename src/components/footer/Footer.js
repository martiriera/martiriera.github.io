import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          This page is based on Saad Pasta's{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a> cool template.
        </p>
      </div>
    </Fade>
  );
}
