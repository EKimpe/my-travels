
import React from "react";

const Travel = ({ text1, text2, text3, image }) => (
  <figure>
    <img src={image} alt={text3} />
    <figcaption>
      <blockquote>{text1}</blockquote>
      <blockquote>{text2}</blockquote>
      <blockquote>{text3}</blockquote>
    </figcaption>
  </figure>
);

export default Travel;