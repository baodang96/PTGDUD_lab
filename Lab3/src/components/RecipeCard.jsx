import React from "react";
import { Bookmark } from "lucide-react";
import "./RecipeCard.css";
import image95 from "T:/22709051/PTGDUD_lab/Lab3/src/img/Image95.png"

function RecipeCard( {text, img, time}) {
  return (
    <div className="card">
      <img
        src= {img}
        alt="Avocado Salad"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{text}</h2>
        <div className="card-footer">
          <span className="time-badge">{time} minutes</span>
          <Bookmark className="bookmark-icon" />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
