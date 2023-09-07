import { Text, VStack, Heading, Image, HStack } from "@chakra-ui/react";
import aboutImage from "../assets/aboutImage.png";
import aboutImageDesktop from "../assets/aboutImageDesktop.png";

// eslint-disable-next-line react/prop-types
const Banner = ({ heading, text }) => {
  return (
    <VStack
      backgroundImage={{
        base: "linear-gradient(to top, brand.acentColor 50%, #F6F5E3 50%)",
        lg: "linear-gradient(to left, brand.acentColor 50%, #F6F5E3 50%)",
      }}
      p={{ base: 5, lg: 12 }}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"60vh"}
    >
      <HStack
        gap={5}
        justify-content={"center"}
        alignItems={{ base: "center", lg: "center" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Image
          display={{ base: "block", lg: "none" }}
          maxWidth={"600px"}
          mt={{ base: "20px", lg: "0" }}
          ml={{ base: "0", lg: "100px" }}
          src={aboutImage}
          pb={4}
        />
        <Image
          display={{ base: "none", lg: "block" }}
          mt={{ base: "20px", lg: "0" }}
          ml={{ base: "0", lg: "50px" }}
          src={aboutImageDesktop}
          pb={4}
        />
        <VStack
          mt={{ base: "-20px", lg: 0 }}
          pt={4}
          w={{ base: "100%", lg: "50%" }}
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <Heading
            fontSize={{ base: "24px", lg: "40px" }}
            fontStyle={"italic"}
            fontWeight={400}
            lineHeight={"32px"}
            fontFamily={"secondaryHeading"}
            color={"brand.background"}
            textAlign={{ base: "center", lg: "left" }}
          >
            {heading}
          </Heading>
          <Text
            w={{ base: "100%", lg: "80%" }}
            color={"whiteAlpha.900"}
            textAlign={{ base: "center", lg: "left" }}
            fontSize={{ base: "16px", lg: "20px" }}
          >
            {text}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Banner;
