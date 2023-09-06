import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bgImageMobile from "../assets/bg-mobile-hero.png";
import bgImageDesktop from "../assets/bg-desktop-hero.png";

const animationKeyframes = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1 }
`;

const animation = `${animationKeyframes} .5s ease-in-out`;

const HeroSection = () => {
  return (
    <HStack
      p={0}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundImage={{ base: bgImageMobile, md: bgImageDesktop }}
      width={"100%"}
      height={"100vh"}
    >
      <VStack
        as={motion.div}
        animation={animation}
        margin={"0 auto"}
        gap={{ base: 2, lg: 4 }}
        alignItems={"flex-start"}
        px={{ base: 8, lg: 12 }}
      >
        <Heading
          w={{ base: "98%", lg: "100%" }}
          textAlign={"left"}
          fontWeight={400}
          fontSize={{ base: "70px", md: "3rem" }}
          color={"brand.secondaryColor"}
        >
          La Postal
        </Heading>
        <Text
          textAlign={"left"}
          color={"brand.secondaryColor"}
          fontSize={{ base: "1.2rem", sm: "1.5rem" }}
        >
          Parador de playa | Est. 1993
        </Text>
      </VStack>
    </HStack>
  );
};

export default HeroSection;
