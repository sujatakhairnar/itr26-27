import React from "react";

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Learn more about our store and mission.</p>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>We started MyStore with a simple mission: to provide quality products at affordable prices.</p>
        </div>
        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li>✓ Quality Products</li>
            <li>✓ Customer Satisfaction</li>
            <li>✓ Fast Delivery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;