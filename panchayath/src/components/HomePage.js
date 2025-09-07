import React from "react";
import backgroundImage from '../assets/village-background.jpg';

function HomePage() {
  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <h1>Digital Governance for Your Village</h1>
        <p>
          Empowering local governance by providing easy online access to certificates, grievances, and important records.
        </p>
        <div>
          <button>Apply for Certificate</button>
          <button>Submit Grievance</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
