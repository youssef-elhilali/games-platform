import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchGame from "./SearchGame";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="15px" spacing={5}>
      <Image borderRadius="full" boxSize="70px" src={logo} alt="Dan Abramov" />
      <SearchGame onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
