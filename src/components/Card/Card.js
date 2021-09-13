import React from "react";
import "./Card.css";

const images = [
  "https://takelessons.com/blog/wp-content/uploads/2015/06/zero1.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/one.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/two.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/three.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/four.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/five.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/sox.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/seven.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/eight.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/nine.jpg",
  "https://takelessons.com/blog/wp-content/uploads/2015/06/ten.jpg",
];

export default function Card({ pronunciation, hiragana, kanji, number }) {
  return (
    <div className="card">
      <div className="card-info">
        <h1>Pronunciation:</h1>
        <h2>{pronunciation}</h2>
        <h1>Hiragana:</h1>
        <h2>{hiragana}</h2>
        <h1>Kanji: </h1>
        <h2>{kanji}</h2>
      </div>
      <div className="card-image">
        {number ? (
          <img src={images[number]} alt="number" srcset="" />
        ) : (
          <p>No number yet or the number is not in the range (0-10)</p>
        )}
      </div>
    </div>
  );
}
