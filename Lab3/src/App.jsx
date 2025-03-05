import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import RecipeCard from "./components/RecipeCard";
import ita_salad from "./img/italian-salad.png";
import spaghetti from "./img/spaghetti-shrimp.png";
import lotus from "./img/lotus-salad.png";

function App() {
  const [arrCard, setArrCard] = useState([
    { text: "Italian salad", img: ita_salad, time: "32" },
    { text: "Spaghetti shrimp", img: spaghetti, time: "22" },
    { text: "Lotus salad", img: lotus, time: "11" },
  ]);

  return (
    <>
      <Header />
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

export default App;