import React, { useState } from "react";
import { formatCard } from "./helpers";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hook/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
 const [card, addCard, cleardCards] = useAxios(
  "cards",
  "https://deckofcardsapi.com/api/deck/new/draw/"  
 );
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={()=>addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
