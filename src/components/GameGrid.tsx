import axios from "axios";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export default function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data &&
          !isLoading &&
          data.map((game: Game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} name={game.name} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
}
