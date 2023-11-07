import { AiFillWindows, AiFillApple, AiFillAndroid } from "react-icons/ai";
import {
  BsNintendoSwitch,
  BsPlaystation,
  BsXbox,
  BsGlobe,
} from "react-icons/bs";
import { DiLinux } from "react-icons/di";
import { Game } from "../services/games-service";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  game: Game;
}

const iconMap: { [key: string]: IconType } = {
  pc: AiFillWindows,
  playstation: BsPlaystation,
  linux: DiLinux,
  xbox: BsXbox,
  nintendo: BsNintendoSwitch,
  android: AiFillAndroid,
  mac: AiFillApple,
  web: BsGlobe,
};

const PlatformIcon = ({ game }: Props) => {
  return game.parent_platforms.map(({ platform }) => (
    <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
  ));
};

export default PlatformIcon;
