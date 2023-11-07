import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/games-service";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} alt={game.name} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack marginY="10px">
            <PlatformIcon key={game.id} game={game} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
