import { HStack, Select, Switch, Input, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import FilterMenu from "./FilterMenu";


const SearchBar = () => {
    return(
      <HStack flexDirection={{base:"column-reverse", md:"row"}} py={4} w={"100%"} justifyContent={"space-between"} gap={4}>
          <Select backgroundColor={"whiteAlpha.900"} placeholder='Tipo de oficina'>
            <option value='option1'>Private</option>
            <option value='option2'>Co-Work</option>
            <option value='option3'>Full Office</option>
          </Select>
          <Select backgroundColor={"whiteAlpha.900"} placeholder='Ubicación'>
            <option value='option1'>Buenos Aires</option>
            <option value='option2'>São Pablo</option>
            <option value='option3'>Bogotá</option>
          </Select>
          <Input
          size="md"
          type="date"
          placeholder="Fecha"
          backgroundColor={"whiteAlpha.900"}
          />
          <Flex w={"100%"} alignItems={"center"} gap={4} justifyContent={{base: "space-between"}}>
            <FormControl display='flex' alignItems='center'>
              <FormLabel htmlFor='amenities' mb='0'>
                Amenities
              </FormLabel>
              <Switch id='amenities' />
            </FormControl>
            <FilterMenu />
          </Flex>
      </HStack>
    )
}

export default SearchBar;