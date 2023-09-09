import {
  HStack,
  UnorderedList,
  ListItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import pajarosMenu from "../assets/pajaritos_menu.svg";

const animationKeyframes = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1 }
`;

const animation = `${animationKeyframes} .5s ease-in-out`;

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <HStack
      width={"100%"}
      as={motion.div}
      animation={animation}
      px={{ base: 0, lg: 12 }}
      backgroundColor={scroll ? "brand.background" : "transparent"}
      position={"fixed"}
      top={0}
      right={0}
      zIndex={10}
    >
      <HStack
        m={"0 auto"}
        zIndex={10}
        width={{ base: "100%", lg: "90%" }}
        margin={"0 auto"}
        justifyContent={{ base: "flex-end", lg: "center" }}
      >
        <HStack
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
          backgroundColor={{
            base: isToggled ? "brand.acentColor" : "transparent",
          }}
          boxShadow={{
            base: isToggled ? "0 0 0 100vmax rgba(0, 0, 0, .7)" : "none",
            lg: "none",
          }}
        >
          <UnorderedList
            w={"100%"}
            h={{ base: "100vh", lg: "auto" }}
            m={0}
            gap={12}
            display={{ base: isToggled ? "flex" : "none", lg: "flex" }}
            flexDirection={{ base: "column", lg: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
            fontSize={22}
          >
            <ListItem
              display={{ base: "block", lg: "none" }}
              listStyleType={"none"}
            >
              <Image src={pajarosMenu} />
            </ListItem>
            <ListItem
              fontSize={"24px"}
              fontStyle={"italic"}
              fontFamily={"secondaryHeading"}
              color={{ base: "brand.background", lg: "brand.acentColor" }}
              className="hover-underline-animation"
              listStyleType={"none"}
            >
              <a href="#nosotros">Nosotros</a>
            </ListItem>
            <ListItem
              fontSize={"24px"}
              fontStyle={"italic"}
              fontFamily={"secondaryHeading"}
              color={{ base: "brand.background", lg: "brand.acentColor" }}
              className="hover-underline-animation"
              listStyleType={"none"}
            >
              <a href="#menu">Menú</a>
            </ListItem>
            <ListItem
              fontSize={"24px"}
              fontStyle={"italic"}
              fontFamily={"secondaryHeading"}
              color={{ base: "brand.background", lg: "brand.acentColor" }}
              className="hover-underline-animation"
              listStyleType={"none"}
            >
              <a href="#eventos">Eventos</a>
            </ListItem>
            <ListItem
              fontSize={"24px"}
              fontStyle={"italic"}
              fontFamily={"secondaryHeading"}
              color={{ base: "brand.background", lg: "brand.acentColor" }}
              className="hover-underline-animation"
              listStyleType={"none"}
            >
              <a href="#galeria">Galería</a>
            </ListItem>
            <ListItem
              fontSize={"24px"}
              fontStyle={"italic"}
              fontFamily={"secondaryHeading"}
              color={{ base: "brand.background", lg: "brand.acentColor" }}
              className="hover-underline-animation"
              listStyleType={"none"}
            >
              <a href="#contacto">Contacto</a>
            </ListItem>
          </UnorderedList>
          <Button
            display={{ base: "flex", lg: "none" }}
            flexDirection={"column"}
            mr={{ base: isToggled ? 0 : "auto", lg: "auto" }}
            gap={2}
            p={4}
            _active={{ backgroundColor: "transparent" }}
            _hover={{ backgroundColor: "transparent" }}
            backgroundColor={"transparent"}
            onClick={() => setIsToggled(!isToggled)}
          >
            <CloseIcon
              fontSize={"20px"}
              color={"brand.background"}
              display={isToggled ? "block" : "none"}
            />
            <HamburgerIcon
              fontSize={"20px"}
              color={"brand.acentColor"}
              display={isToggled ? "none" : "block"}
            />
          </Button>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default NavBar;
