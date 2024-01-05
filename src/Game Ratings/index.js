import React from "react";
import {
  GameListRating,
  RatingList,
  NavLink,
  GameLogo,
  Border,
} from "./styles";
import { RATINGS } from "./constants";
import gameIcon from "../images/GameIcon.svg";

function GameRatings({ index, name = RATINGS }) {
  return (
    <GameListRating>
      <RatingList>
        <GameLogo src={gameIcon} alt="gameIcon" />
        {name.map(({ name }) => (
          <NavLink key={index}>
            <span>{name}</span>
            {index !== name.length - 1 && <Border>{}</Border>}
          </NavLink>
        ))}
      </RatingList>
    </GameListRating>
  );
}

export default GameRatings;
