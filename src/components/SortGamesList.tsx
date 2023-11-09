import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
}

const SortGamesList = ({ onSelectOrder }: Props) => {
  const [order, setOrder] = useState("Relevance");

  const sortingListItems = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "-name" },
    { label: "Release Date", value: "-release" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];

  return (
    <>
      <Menu>
        <MenuButton marginX={7} as={Button} rightIcon={<BsChevronDown />}>
          Order by: {order}
        </MenuButton>
        <MenuList>
          {sortingListItems.map((order) => (
            <MenuItem
              onClick={() => {
                setOrder(order.label);
                onSelectOrder(order.value);
              }}
              key={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortGamesList;
