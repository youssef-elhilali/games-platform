import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const CriticScore = ({ game }: Props) => {
  return (
    <>
      <Badge
        fontSize="14px"
        paddingX={3}
        fontWeight="bold"
        borderRadius="3px"
        colorScheme={
          game.metacritic > 90
            ? "green"
            : game.metacritic > 80
            ? "yellow"
            : "red"
        }
      >
        {game.metacritic}
      </Badge>
    </>
  );
};

export default CriticScore;
