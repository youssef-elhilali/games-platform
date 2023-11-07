import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image borderRadius="full" boxSize="70px" src={logo} alt="Dan Abramov" />
    </HStack>
  );
};

export default NavBar;
