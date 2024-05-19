import React, { useEffect, useState } from "react";

import axios from "axios";
import { Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";

export default function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game: Game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
