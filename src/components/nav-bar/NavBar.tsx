import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchGame from "./SearchGame";

const NavBar = () => {
  return (
    <HStack padding="15px" spacing={5}>
      <Image borderRadius="full" boxSize="70px" src={logo} alt="Dan Abramov" />
      <SearchGame />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
