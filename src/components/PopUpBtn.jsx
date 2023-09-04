import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, Icon } from "@chakra-ui/react";
import { FaFaceGrinBeamSweat } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const PopUpBtn = ( {btnName} ) => {
  return (
    <Popover> 
      <PopoverTrigger>
        <Button  _hover={{ bg: 'mainColor' }} px={8} color={"whiteAlpha.900"} borderRadius={"20px"} backgroundColor={"blackAlpha.900"}>{btnName}</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
        <PopoverArrow />
          <PopoverHeader
          fontFamily={"heading"}
          >Ups! Este es solo un botón para lucirnos<Icon color={"mainColor"} ml={2} as={FaFaceGrinBeamSweat} /> </PopoverHeader>
          <PopoverCloseButton />
        <PopoverBody>
          Si quieres que tu sitio web se vea como este, ¡contáctanos y trabajemos juntos!
          <Button
          borderRadius={"20px"}
          _hover={{bg: "blackAlpha.900", color:"whiteAlpha.900"}}
          mt={4} 
          backgroundColor='mainColor'
          as={"a"}
          href="https://swwwing.com.ar"
          target="_blank"
          >Escríbenos</Button>
        </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default PopUpBtn;