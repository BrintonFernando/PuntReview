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

function GameRatings() {
  return (
    <GameListRating>
      <RatingList>
        <GameLogo src={gameIcon} alt="gameIcon" />
        {RATINGS.map(({ name }, index) => (
          <NavLink key={index}>
            <span>{name}</span>
            {index !== RATINGS.length - 1 && <Border>{}</Border>}
          </NavLink>
        ))}
      </RatingList>
    </GameListRating>
  );
}

export default GameRatings;
