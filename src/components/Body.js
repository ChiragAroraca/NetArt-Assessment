import React from "react";
import parts from "../images/Parts.png";

const Body = () => {
  return (
    <div className="body-main">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={parts} alt="All Parts are available" />
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr />
      <p>
        <strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
      </p>
      <p className="services">
        CHEMICALS & PROCESS<span className="seperator">|</span>POWER
        <span className="seperator">|</span>WATER & WASTE WATER
        <span className="seperator">|</span>OILS & GAS
        <span className="seperator">|</span>PHARMA
        <span className="seperator">|</span>SUGARS & DISTILLERIES
        <span className="seperator">|</span>PAPER & PULP
        <span className="seperator">|</span>MARINE & DEFENCE
        <span className="seperator">|</span>METAL & MINING
        <span className="seperator">|</span>FOOD & BEVERAGE
        <span className="seperator">|</span>PETROCHEMICAL & REFINERIES
        <span className="seperator">|</span>SOLAR
        <span className="seperator">|</span>BUILDING
        <span className="seperator">|</span>HVAC
        <span className="seperator">|</span>FIRE FIGHTING
        <span className="seperator">|</span>AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
};

export default Body;
