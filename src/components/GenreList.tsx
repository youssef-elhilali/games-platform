import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImageURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, errorMessage } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {errorMessage && <Text color="red.300">{errorMessage}</Text>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                borderRadius="full"
                boxSize="40px"
                src={cropImageURL(genre.image_background)}
                alt={genre.name}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
