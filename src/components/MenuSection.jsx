import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import bgMenu from "../assets/bg-section-menu.png";
import pajaros from "../assets/pajaritos_menu.svg";
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
      <VStack backgroundColor={"brand.background"} gap={8} p={4} w={"100%"}>
        <Text
          fontSize={{ base: "16px", lg: "20px" }}
          w={{ base: "100%", md: "80%" }}
          textAlign={"center"}
          color={"brand.acentColor"}
        >
          Nuestro restaurante está abierto durante todo el año. Servimos brunchs
          y meriendas, sandwiches, tostones, ensaladas y más, incorporando
          frutos de mar, vegetales de estación e ingredientes de producción
          regional. Durante el verano ofrecemos una barra premium con cocktails
          clásicos y de autor. Ten en cuenta que el menú puede variar de acuerdo
          a la estación en la que nos visites.
        </Text>
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
          Menú verano 2023
        </Button>
      </VStack>
    </VStack>
  );
};
