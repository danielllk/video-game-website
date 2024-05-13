import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameRes {
  count: number;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<FetchGameRes>(
        "https://rawg.io/api/games?key=cba9a66341de45bd8fee2f40dbd12a43"
      )
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  console.log(games);
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
