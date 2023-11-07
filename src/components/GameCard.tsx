import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/games-service";

interface Props {
  game: Game;
  index: number;
}

const GameCard = ({ game }: Props) => (
  <Card borderRadius={10} overflow="hidden">
    <Image src={game.background_image} alt={game.name} />
    <CardBody>
      <Heading fontSize="2xl">{game.name}</Heading>
    </CardBody>
  </Card>
);

export default GameCard;
