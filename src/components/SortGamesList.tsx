import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortGamesList = () => {
  const sortingListItems = [
    "Relevance",
    "Date added",
    "Name",
    "Release Date",
    "Popularity",
    "Average rating",
  ];

  return (
    <>
      <Menu>
        <MenuButton marginX={7} as={Button} rightIcon={<BsChevronDown />}>
          Order by: Relevance
        </MenuButton>
        <MenuList>
          {sortingListItems.map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortGamesList;
