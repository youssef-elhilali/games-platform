import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/games-service";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import cropImageURL from "../services/image-url";

interface Props {
  game: Game;
  width: string;
  borderRadius: string;
}

const GameCard = ({ game, width, borderRadius }: Props) => {
  return (
    <>
      <Card width={width} borderRadius={borderRadius} overflow="hidden">
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
