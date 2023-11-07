import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  FormErrorMessage,
  Image,
  FormControl,
} from "@chakra-ui/react";
import { useGames } from "./hooks/useGames";

const GameGrid = () => {
  const {
    games,
    errorMessage,
    isLoading,
    setGames,
    setErrorMessage,
    setLoading,
  } = useGames();

  return (
    <>
      {errorMessage && (
        <FormControl isInvalid={errorMessage.length > 0}>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
      )}
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        padding="15px"
      >
        {games.map((game, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size="md" justifyContent="center">
                <Image
                  src={game.background_image}
                  height="70px"
                  alt={game.name}
                />
              </Heading>
            </CardHeader>
            <CardBody>
              {/* <Text></Text> */}
              <Heading>{game.name}</Heading>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
