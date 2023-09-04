import {
  HStack,
  UnorderedList,
  ListItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import logo from "../assets/react.svg";
import PopUpBtn from "./PopUpBtn";
import { keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1 }
`;

const animation = `${animationKeyframes} .5s ease-in-out`;

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <HStack
      as={motion.div}
      animation={animation}
      px={{ base: 0, lg: 12 }}
      backgroundColor={"#FFFFFF"}
      position={"sticky"}
      top={0}
      zIndex={10}
    >
      <HStack
        zIndex={10}
        width={"90%"}
        margin={"0 auto"}
        justifyContent={"space-between"}
      >
        <a href="/">
          <Image w={100} src={logo} />
        </a>
        <HStack
          gap={4}
          flexDirection={{
            base: isToggled ? "column-reverse" : "row",
            lg: "row",
          }}
          justifyContent={{
            base: isToggled ? "flex-end" : "center",
            lg: "center",
          }}
          alignItems={{ base: isToggled ? "flex-end" : "center", lg: "center" }}
          p={4}
          pr={0}
          position={{
            base: isToggled ? "absolute" : "relative",
            lg: "relative",
          }}
          top={0}
          right={0}
          bottom={0}
          w={{ base: isToggled ? "100vw" : "auto", lg: "auto" }}
          h={{ base: isToggled ? "100vh" : "auto", lg: "auto" }}
          textAlign={{ base: "right", lg: "center" }}
          backgroundColor={"#FFFFFF"}
          boxShadow={{
            base: isToggled ? "0 0 0 100vmax rgba(0, 0, 0, .7)" : "none",
            lg: "none",
          }}
        >
          <UnorderedList
            w={"100%"}
            m={0}
            gap={8}
            display={{ base: isToggled ? "flex" : "none", lg: "flex" }}
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
            fontSize={20}
          >
            <ListItem
              className="hover-underline-animation"
              listStyleType={"none"}
            >
              <a href="#servicios">Servicios</a>
            </ListItem>
            <ListItem
              className="hover-underline-animation"
              listStyleType={"none"}
            >
              <a href="#oficinas">Oficinas</a>
            </ListItem>
            <ListItem
              className="hover-underline-animation"
              listStyleType={"none"}
            >
              <a href="#blog">Blog</a>
            </ListItem>
            <PopUpBtn btnName="Contacto" />
          </UnorderedList>
          <Button
            display={{ base: "flex", lg: "none" }}
            flexDirection={"column"}
            mr={{ base: isToggled ? 4 : "auto", lg: "auto" }}
            gap={2}
            p={4}
            backgroundColor={"transparent"}
            onClick={() => setIsToggled(!isToggled)}
          >
            <CloseIcon display={isToggled ? "block" : "none"} />
            <HamburgerIcon display={isToggled ? "none" : "block"} />
          </Button>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default NavBar;
