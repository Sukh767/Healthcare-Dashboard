import React from "react";
import { Heart, Zap } from "lucide-react";
import "../style/AnatomySection.css";
import humanBodyImage from "../assets/human-body.jpg";

export default function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="anatomy-section__image-wrapper">
        <img
          src={humanBodyImage}
          alt="Human Body Anatomy"
          className="anatomy-section__image"
        />
        <div className="anatomy-section__indicator anatomy-section__indicator--heart bg-secondary">
          {/* <Heart fill="#F92024" className="anatomy-section__icon" /> */}
          <span className="anatomy-section__icon"> ❤️&nbsp;&nbsp; Healthy Heart</span>
        </div>
        <div className="anatomy-section__indicator anatomy-section__indicator--leg bg-primary">
          {/* <Zap className="anatomy-section__icon" /> */}
          <span className="anatomy-section__icon"> 🦵🏻&nbsp;&nbsp; Healthy Leg</span>
        </div>
      </div>
    </div>
  );
}
