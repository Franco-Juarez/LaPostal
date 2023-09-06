import { Text, VStack, Heading, Image, HStack } from "@chakra-ui/react";
import aboutImage from "../assets/aboutImage.png";

const Banner = ({ heading, text }) => {
  return (
    <VStack
      backgroundImage={{
        base: "linear-gradient(to top, brand.acentColor 50%, #F6F5E3 50%)",
        lg: "linear-gradient(to left, blue.400 50%, #F6F5E3 50%)",
      }}
      p={{ base: 5, lg: 12 }}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"100vh"}
    >
      <HStack
        gap={5}
        justify-content={"center"}
        alignItems={{ base: "center", lg: "center" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Image mt={"20px"} src={aboutImage} pb={4} />
        <VStack
          mt={"-20px"}
          pt={4}
          w={{ base: "100%", lg: "50%" }}
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <Heading
            fontSize={"24px"}
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
            w={{ base: "100%", lg: "50%" }}
            color={"whiteAlpha.900"}
            textAlign={{ base: "center", lg: "left" }}
            fontSize={"16px"}
          >
            {text}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Banner;
