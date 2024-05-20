import React, { useEffect, useState } from "react";

import axios from "axios";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game: Game) => (
          <GameCard key={game.id} game={game} name={game.name} />
        ))}
      </SimpleGrid>
    </>
  );
}
