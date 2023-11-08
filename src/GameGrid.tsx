import { SimpleGrid, FormErrorMessage, FormControl } from "@chakra-ui/react";
import { useGames } from "./hooks/useGames";
import GameCard from "./components/GameCard";
import SkeletonCards from "./components/SkeletonCards";
import GameCardContainer from "./components/GameCardContainer";

const GameGrid = () => {
  const { data: games, errorMessage, isLoading } = useGames();

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
        spacing={4}
        padding="17px"
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <SkeletonCards />
              </GameCardContainer>
            ))
          : games.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
