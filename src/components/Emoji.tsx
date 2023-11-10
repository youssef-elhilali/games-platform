import mehEmoji from "../assets/meh.webp";
import bullsEyeEmoji from "../assets/bullseye.webp";
import thumbsUpEmoji from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojis: { [key: number]: ImageProps } = {
    3: { src: mehEmoji, alt: "Meh" },
    4: { src: thumbsUpEmoji, alt: "Rrecommended" },
    5: { src: bullsEyeEmoji, alt: "Exceptional" },
  };

  return <Image marginY={3} {...emojis[rating]} boxSize="25px" />;
};

export default Emoji;
