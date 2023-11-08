import { SimpleGrid, FormErrorMessage, FormControl } from "@chakra-ui/react";
import { useGames } from "./hooks/useGames";
import GameCard from "./components/GameCard";
import SkeletonCards from "./components/SkeletonCards";

const GameGrid = () => {
  const { games, errorMessage, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {errorMessage && (
        <FormControl isInvalid={errorMessage.length > 0}>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="17px"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <SkeletonCards width="300px" borderRadius="10px" key={skeleton} />
            ))
          : games.map((game) => (
              <GameCard
                width="300px"
                borderRadius="10px"
                key={game.id}
                game={game}
              ></GameCard>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
