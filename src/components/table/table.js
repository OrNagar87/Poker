import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./table.css";
import Player from "./player";
import axios from "axios";
import Setting from "../../setting/setting";
import Card from "./Card";

const { decks } = require("cards");

function Table() {
  const [player1, setPlayer1] = useState({
    cards: [],
    credit: 1000,
    bid: 0,
    isActive: 0,
  });

  const [player2, setPlayer2] = useState({
    cards: [],
    credit: 1000,
    bid: 0,
    isActive: 0,
  });

  const Player_position = [
    { top: 200, left: 700 },
    { top: 285, left: 50 },
  ];

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://randomuser.me/api/");
      setData(result.data.results[0]);
    };
    fetchData();
  }, []);
  const startGame = () => {
    const deck = new decks.StandardDeck();
    deck.shuffleAll();
    const hand = deck.draw(5);
    console.log("START", hand);
  };

  return (
    <div className="table">
      <div className="table-image">
        <Card type="back" start={startGame} />
        {data.name && (
          <div>
            <Player
              key={data.login.uuid}
              picture={data.picture.medium}
              name={data.name.first}
              credit={player1.credit}
              position={Player_position[1]}
            />

            <Player
              picture="data:image/png;base64,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"
              name="YOU"
              position={Player_position[0]}
              credit={player2.credit}
            />
          </div>
        )}
      </div>
      <Setting />
    </div>
  );
}

export default Table;
