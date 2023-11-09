import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import cropImageURL from "../services/image-url";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={cropImageURL(game.background_image)} alt={game.name} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack marginY="10px" justifyContent="space-between">
            <div>
              <PlatformIcon key={game.id} game={game} />
            </div>
            <div>
              <CriticScore game={game} />
            </div>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
