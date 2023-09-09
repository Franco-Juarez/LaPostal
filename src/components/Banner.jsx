import { Text, VStack, Heading, Image, HStack } from "@chakra-ui/react";
import aboutImage from "../assets/aboutImage.png";

// eslint-disable-next-line react/prop-types
const Banner = ({ heading, text }) => {
  return (
    <VStack
      id="nosotros"
      p={{ base: 4, lg: 12 }}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundImage={{
        base: "linear-gradient(to bottom, brand.background 30%, brand.acentColor 30%)",
        xl: "linear-gradient(to right, brand.background 50%, brand.acentColor 50%)",
      }}
    >
      <HStack
        gap={5}
        justify-content={"center"}
        alignItems={{ base: "center", lg: "center" }}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <Image
          display={{ base: "block", lg: "none" }}
          maxW={"500px"}
          w={"100%"}
          src={aboutImage}
        />
        <Image
          display={{ base: "none", lg: "block" }}
          mt={{ base: "20px", xl: "0" }}
          ml={{ base: "0", xl: "50px" }}
          src={aboutImage}
          pb={4}
        />
        <VStack
          w={{ base: "100%", lg: "80%" }}
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <Heading
            fontSize={{ base: "24px", lg: "40px" }}
            fontStyle={"italic"}
            fontWeight={400}
            lineHeight={"32px"}
            fontFamily={"secondaryHeading"}
            color={"brand.background"}
            textAlign={{ base: "center", xl: "left" }}
          >
            {heading}
          </Heading>
          <Text
            w={{ base: "100%", md: "80%" }}
            color={"whiteAlpha.900"}
            textAlign={{ base: "center", xl: "left" }}
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
