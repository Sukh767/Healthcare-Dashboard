import React from "react";
import { Heart, Zap } from "lucide-react";
import "../style/AnatomySection.css";

export default function AnatomySection() {
  return (
    <div className="anatomy-card">
      <div className="anatomy-illustration-wrapper">
        <div className="anatomy-illustration">
          <svg width="192" height="320" viewBox="0 0 192 320" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="96" cy="310" rx="40" ry="8" fill="#e5e7eb" opacity="0.5" />
            <g transform="translate(96, 160)">
              <circle cx="0" cy="-120" r="25" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
              <rect x="-8" y="-95" width="16" height="20" fill="#fbbf24" />
              <ellipse cx="0" cy="-40" rx="35" ry="55" fill="#fb923c" stroke="#ea580c" strokeWidth="2" />
              <ellipse cx="-45" cy="-50" rx="12" ry="40" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
              <ellipse cx="45" cy="-50" rx="12" ry="40" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
              <ellipse cx="-50" cy="-5" rx="10" ry="35" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
              <ellipse cx="50" cy="-5" rx="10" ry="35" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
              <circle cx="-50" cy="25" r="8" fill="#fbbf24" />
              <circle cx="50" cy="25" r="8" fill="#fbbf24" />
              <ellipse cx="0" cy="20" rx="30" ry="25" fill="#fb923c" stroke="#ea580c" strokeWidth="2" />
              <ellipse cx="-15" cy="70" rx="15" ry="45" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
              <ellipse cx="15" cy="70" rx="15" ry="45" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
              <ellipse cx="-15" cy="130" rx="12" ry="35" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
              <ellipse cx="15" cy="130" rx="12" ry="35" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
              <ellipse cx="-15" cy="170" rx="8" ry="15" fill="#fbbf24" />
              <ellipse cx="15" cy="170" rx="8" ry="15" fill="#fbbf24" />
              <path
                d="M -8,-60 C -8,-65 -3,-70 2,-65 C 7,-70 12,-65 12,-60 C 12,-50 2,-40 2,-40 C 2,-40 -8,-50 -8,-60 Z"
                fill="#ef4444"
                opacity="0.8"
              />
              <ellipse cx="-12" cy="-55" rx="8" ry="15" fill="#3b82f6" opacity="0.6" />
              <ellipse cx="12" cy="-55" rx="8" ry="15" fill="#3b82f6" opacity="0.6" />
              <ellipse cx="0" cy="-25" rx="15" ry="20" fill="#10b981" opacity="0.5" />
            </g>
          </svg>

          <div className="heart-indicator">
            <Heart className="w-3 h-3 fill-current" />
            <span>Healthy Heart</span>
          </div>

          <div className="log-indicator">
            <Zap className="w-3 h-3" />
            <span>Healthy Log</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="anatomy-details-btn">Details →</button>
      </div>
    </div>
  );
}
