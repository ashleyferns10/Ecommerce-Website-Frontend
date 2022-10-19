import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img src="/assets/friuts.jpg" className="card-img" alt="background image" height="600px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title-hm display-3 fw-bolder mb-3">NEW SEASON ARRIVALS</h5>
          <p className="card-text-hm lead fs-2">
          SHOP YOUR FAVOURITE ITEMS OR ADD TO CART
          </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
