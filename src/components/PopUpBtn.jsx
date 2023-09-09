import {
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Icon,
} from "@chakra-ui/react";
import { FaFaceGrinBeamSweat } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const PopUpBtn = ({ btnName }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          fontStyle={"italic"}
          fontWeight={400}
          fontSize={"20px"}
          fontFamily={"secondaryHeading"}
          color={"brand.background"}
          borderRadius={0}
          backgroundColor={"brand.mainColor"}
          border={"2px solid #CF9A84"}
          _hover={{
            backgroundColor: "brand.background",
            borderColor: "brand.mainColor",
            color: "brand.mainColor",
          }}
        >
          {btnName}
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader fontFamily={"heading"}>
            Ups! Este es solo un botón para lucirnos
            <Icon
              color={"brand.secondaryColor"}
              ml={2}
              as={FaFaceGrinBeamSweat}
            />{" "}
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody display={"flex"} flexDirection={"column"} w={"100%"}>
            Si quieres que tu sitio web se vea como este, ¡contáctanos y
            trabajemos juntos!
            <Button
              fontStyle={"italic"}
              fontWeight={400}
              fontSize={"20px"}
              fontFamily={"secondaryHeading"}
              color={"brand.background"}
              borderRadius={0}
              backgroundColor={"brand.mainColor"}
              border={"2px solid #CF9A84"}
              _hover={{
                backgroundColor: "brand.background",
                borderColor: "brand.mainColor",
                color: "brand.mainColor",
              }}
              as={"a"}
              href="https://swwwing.com.ar"
              target="_blank"
            >
              Escríbenos
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default PopUpBtn;
