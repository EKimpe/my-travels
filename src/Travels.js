import React from "react";
// src/Quotes.js

import Travel from "./Travel";

const travels = [
  {
    text1: "Europe",
    text2: "Norway",
    text3: "much kilometers",
    image: "https://www.algeriepatriotique.com/wp-content/uploads/2017/09/Norvege-les-Lofoten-sous-le-soleil-de-minuit-e1506329953122.jpg"
  },
  {
    text1: "Asia",
    text2: "South Korea",
    text3: "much kilometers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4aGi2TlX-8VhLbfh3REm6uXXy890Sj_G_Tkbmw-QdTGTz4AQgw"
  },
  {
    text1: "Europe",
    text2: "Danemark",
    text3: "much kilometers",
    image: "https://www.holidayguru.fr/wp-content/uploads/2017/08/Zuiderkerk-in-Amsterdam-iStock-528503566-2_titel.jpg"
  },
  {
    text1: "Asia",
    text2: "Japan",
    text3: "much kilometers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_bajvzUkpsXZhdJ548XOC9z-JWNd79OWnPE1urvLrPcssBaAUg"
  },
  {
    text1: "North America",
    text2: "Canada",
    text3: "much kilometers",
    image: "http://www.voyagetips.com/wp-content/uploads/2018/01/yukon-canada.jpg"
  },
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel text1={travel.text1} image={travel.image} text2={travel.text2} text3={travel.text3} />
    ))}
  </div>
);

export default Travels;

