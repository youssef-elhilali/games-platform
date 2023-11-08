import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import cropImageURL from "../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, errorMessage } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
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
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
