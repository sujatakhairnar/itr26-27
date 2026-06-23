import React from "react";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to MyStore</h1>
      <p>Your one-stop shop for all your needs!</p>
      
      <div className="home-features">
        <div className="feature-card">
          <h3>🛍️ Wide Selection</h3>
          <p>Browse through our extensive collection of products</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Fast Shipping</h3>
          <p>Get your orders delivered quickly and reliably</p>
        </div>
        <div className="feature-card">
          <h3>💯 Quality Guarantee</h3>
          <p>All our products are carefully curated for quality</p>
        </div>
      </div>
    </div>
  );
}

export default Home;