import React from "react";
import "./skill-card.css";
function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill-name">{skill.name}</label>
      <label className="skill-level">{skill.level}</label>
    </div>
  );
}

export default SkillCard;
