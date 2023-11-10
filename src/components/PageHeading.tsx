import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const PageHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h2" size="3xl" noOfLines={1}>
      {gameQuery.platform?.name || ""} {gameQuery.genre?.name || ""} Games
    </Heading>
  );
};

export default PageHeading;
