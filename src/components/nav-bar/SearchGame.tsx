import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}

const SearchGame = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray.100" />
        </InputLeftElement>
        <Input
          ref={ref}
          variant="filled"
          placeholder="Search a game ..."
          borderRadius="full"
        />
      </InputGroup>
    </form>
  );
};

export default SearchGame;
