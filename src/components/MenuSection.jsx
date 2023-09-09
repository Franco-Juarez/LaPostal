import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import bgMenu from "../assets/bg-section-menu.png";
import pajaros from "../assets/pajaritos_menu.svg";
import PopUpBtn from "./PopUpBtn";
export const MenuSection = () => {
  return (
    <VStack id="menu" backgroundColor={"brand.background"}>
      <VStack
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundPosition={{ base: "bottom", lg: "center" }}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundImage={bgMenu}
        w={"100%"}
        h={"50vh"}
      >
        <Image w={{ base: "80px", lg: "100px" }} src={pajaros} />
        <Heading
          fontFamily={"secondaryHeading"}
          textAlign={"center"}
          fontSize={{ base: "24px", lg: "40px" }}
          fontStyle={"italic"}
          fontWeight={400}
          color={"brand.background"}
        >
          Nuestro menú
        </Heading>
      </VStack>
      <VStack
        backgroundColor={"brand.background"}
        gap={8}
        py={{ base: 4, xl: 16 }}
        w={"100%"}
      >
        <Text
          fontSize={{ base: "16px", lg: "20px" }}
          w={{ base: "100%", md: "60%" }}
          textAlign={"center"}
          color={"brand.acentColor"}
          px={4}
        >
          Nuestro restaurante está abierto durante todo el año. Servimos brunchs
          y meriendas, sandwiches, tostones, ensaladas y más, incorporando
          frutos de mar, vegetales de estación e ingredientes de producción
          regional.
        </Text>
        <Text
          fontSize={{ base: "16px", lg: "20px" }}
          w={{ base: "100%", md: "60%" }}
          textAlign={"center"}
          color={"brand.acentColor"}
          px={4}
        >
          Durante el verano ofrecemos una barra premium con cocktails clásicos y
          de autor. Ten en cuenta que el menú puede variar de acuerdo a la
          estación en la que nos visites.
        </Text>
        <PopUpBtn btnName={"Menú verano 2023"} />
      </VStack>
    </VStack>
  );
};
