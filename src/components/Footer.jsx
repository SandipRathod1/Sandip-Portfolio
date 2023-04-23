import React from "react";
import {
  AiFillGithub,
  AiOutlineArrowUp,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/87409810?s=400&u=49e752b6a6f5953b4237f6fe30ff97d8e1d86984&v=4"}
          alt="Founder"
        />

        <h2>Sandip Rathod</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/sandip-rathod-469300162/" target={"blank"}>
            < AiFillLinkedin />
          </a>
          <a href="https://github.com/SandipRathod1" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;