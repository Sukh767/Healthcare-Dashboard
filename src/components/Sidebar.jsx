// Sidebar.js
import React from "react";
import "../style/Sidebar.css";
import { navLinks } from "../data/navLinks";

const Sidebar = () => {
  return (
    <aside className="sidebar bg-sidebar">
      <div className="sidebar-logo">
        <h2>
          <span className="text-primary">Health</span>
          <span className="text-secondary">care</span>
          <span>.</span>
        </h2>
      </div>

      <div className="sidebar__section">
        <h4 className="sidebar__section-heading sidebar-heading-text">General</h4>
        <ul className="sidebar-links">
          {navLinks.general.map((link, index) => {
            const Icon = link.icon;
            return (
              <li key={index} className="text-sidebar">
                <span className="sidebar-icon">
                  <Icon color={link.color}  size={18} strokeWidth={1.5} />
                </span>
                {link.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar__section-heading sidebar-heading-text">Tools</h4>
        <ul className="sidebar-links">
          {navLinks.tools.map((link, index) => {
            const Icon = link.icon;
            return (
              <li key={index} className="text-sidebar">
                <span className="sidebar-icon">
                  <Icon color={link.color} fill={link.color} size={18} strokeWidth={1.5} />
                </span>
                {link.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sidebar-section sidebar-section--settings">
        <ul className="sidebar-links">
          <li className="text-sidebar">
            <span className="sidebar-icon">
              <navLinks.settings.icon
                color={navLinks.settings.color}
                // fill={navLinks.settings.color}
                size={18}
                strokeWidth={1.5}
              />
            </span>
            {navLinks.settings.name}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
