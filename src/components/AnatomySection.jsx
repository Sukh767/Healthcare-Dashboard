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
        <div className="anatomy-section__indicator anatomy-section__indicator--heart">
          <Heart className="anatomy-section__icon" />
          <span>Healthy Heart</span>
        </div>
        <div className="anatomy-section__indicator anatomy-section__indicator--log">
          <Zap className="anatomy-section__icon" />
          <span>Healthy Log</span>
        </div>
      </div>
    </div>
  );
}
