
import React from 'react';
import './App.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import the required icons

function App() {
  return (
    <div className="App">
      {/* <header className="header">
        <div className="center-space"></div>
        <div className="heading">
          <div className="logo">
            <img src="logo.png" alt="Logo" height= "90px" width="220px" />
          </div>
        </div>
        <div className="right-space"></div>
      </header> */}
      <div className="content">
        <div className="left-section">
          <img src="1.png" alt="Left" />
        </div>
        <div className="right-section">
        <div className="logo">
            <img src="logo.png" alt="Logo" height= "200px" width="100px" />
          </div>
          <p><strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong></p>
          <ul>
            <li>
              <span className="dot"></span> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
            </li>
            <li>
              <span className="dot"></span> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
            </li>
          </ul>
          <img src="2.png" alt="Award" />
          <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
      </div>
      <div className="separator"></div>
      <div className="motor-section">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src="3.png" alt="Motor" />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>
      <footer className="footer-1">
        <hr className="line" />
        <p><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>
        <p>CHEMICALS & PROCESS | POWER | WATER & WASTE | WATER OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
      </footer>
      <footer className="footer">
      <div className="footer-content">
          <div className="left-section">
            <FontAwesomeIcon icon={faPhone} />
            <p className="toll-free">Toll-Free: 1800 200 1234</p>
          </div>
          <div className="center-section">
            <a href="https://www.facebook.com/cripumps" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-solid fa-phone" />
                <p className="toll-free" > www.facebook.com/cripumps</p>
            </a>
          </div>
          <div className="right-section">
            <a href="https://www.crigroups.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} className="icon" />
              <p className="toll-free" > www.crigroups.com </p>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Shiva Rama Krishna © All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
