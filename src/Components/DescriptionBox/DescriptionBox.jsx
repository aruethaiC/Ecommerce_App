import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our online clothing store! Explore trendy fashion at
          affordable prices. Quality garments crafted with care. Enjoy
          convenient shopping and fast shipping. Shop with confidence and join
          our fashion community today!
        </p>
        <p>
          Discover your style at our online clothing emporium! From chic
          essentials to statement pieces, we've got you covered. Browse our
          curated collection of fashion-forward apparel and accessories. Elevate
          your wardrobe with ease and shop hassle-free. Start your style journey
          with us today!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
