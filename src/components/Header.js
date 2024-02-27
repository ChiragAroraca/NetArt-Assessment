import React from "react";
import award1 from "../images/Award.png";
import award2 from "../images/Award-2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-1">
        <img src={award1} alt="Awards" />
      </div>
      <div className="header-2">
        <p className="heading">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </p>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img src={award2} alt="Received multiple awards" />
        <p>
          Government of India has awarded the{" "}
          <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
          Selvaraj, Joint Managing Director of C.R.I. Group received the award
          from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
          Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default Header;
