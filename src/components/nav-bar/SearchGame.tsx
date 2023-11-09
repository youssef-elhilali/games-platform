import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchGame = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch color="gray.100" />
      </InputLeftElement>
      <Input
        variant="filled"
        placeholder="Search a game ..."
        borderRadius="full"
      />
    </InputGroup>
  );
};

export default SearchGame;
