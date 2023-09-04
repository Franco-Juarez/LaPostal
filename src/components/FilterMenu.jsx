import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { BiListUl, BiDollar } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";


const FilterMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<BiListUl />}
        variant='outline'
        backgroundColor={"whiteAlpha.900"}
      />
      <MenuList>
      <MenuItem icon={<BsStars />} >
          Newest
        </MenuItem>
        <MenuItem icon={<IoDiamond />} >
          Relevants
        </MenuItem>
        <MenuItem icon={<BiDollar />} >
          Price (High - Low)
        </MenuItem>
        <MenuItem icon={<BiDollar />} >
          Price (Low - High)
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default FilterMenu;

