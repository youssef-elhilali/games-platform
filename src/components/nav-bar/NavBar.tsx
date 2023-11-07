import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import ColorModeSwitch from "../ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image borderRadius="full" boxSize="70px" src={logo} alt="Dan Abramov" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
