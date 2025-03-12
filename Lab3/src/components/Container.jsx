import { useState } from "react";
import RecipeCard from "./RecipeCard";
import ita_salad from "../img/italian-salad.png";
import spaghetti from "../img/spaghetti-shrimp.png";
import lotus from "../img/lotus-salad.png";

import './Container.css'

export default function Container() {
  const [arrCard, setArrCard] = useState([
    { text: "Italian salad", img: ita_salad, time: "32" },
    { text: "Spaghetti shrimp", img: spaghetti, time: "22" },
    { text: "Lotus salad", img: lotus, time: "11" },
    { text: "Italian salad", img: ita_salad, time: "32" },
    { text: "Spaghetti shrimp", img: spaghetti, time: "22" },
    { text: "Lotus salad", img: lotus, time: "11" },
    { text: "Spaghetti shrimp", img: spaghetti, time: "22" },
    { text: "Lotus salad", img: lotus, time: "11" },
  ]);

  return (
    <>
      <ul>
        {arrCard.map((item, index) => (
          <li key={index}>
            <RecipeCard text={item.text} img={item.img} time={item.time} />
          </li>
        ))}
      </ul>
    </>
  );
}
