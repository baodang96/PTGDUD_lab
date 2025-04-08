import { Link } from "react-router-dom";

import "./Board.css";

export default function Board({label, value, percent, icon, background, href}) {
    
  return (
    <div className="board" id={background}>
      <div className="board-header">
        <div>
          <p className="label">{label}</p>
          <h2 className="value">${value.toLocaleString("en-US")}</h2>
        </div>
        <div className="icon-box">
          <Link to={href}><img src={icon} alt="icon" /></Link>
        </div>
      </div>

      <div className="change-info">
        <span className="change-up">▲ {percent}%</span>
        <span className="change-text">period of change</span>
      </div>
    </div>
  );
}
