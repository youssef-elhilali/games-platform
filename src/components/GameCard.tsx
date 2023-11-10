import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import cropImageURL from "../services/image-url";
import { Game } from "../hooks/useGames";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={cropImageURL(game.background_image)} alt={game.name} />
        <CardBody>
          <HStack marginY="10px" justifyContent="space-between">
            <div>
              <PlatformIcon key={game.id} game={game} />
            </div>
            <div>
              <CriticScore game={game} />
            </div>
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
