import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import bgMenu from "../assets/bg-section-menu.png";
import pajaros from "../assets/pajaritos_menu.png";
export const MenuSection = () => {
  return (
    <VStack backgroundColor={"brand.background"}>
      <VStack
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundPosition={"bottom"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundImage={bgMenu}
        w={"100%"}
        h={"50vh"}
      >
        <Image src={pajaros} />
        <Heading
          fontFamily={"secondaryHeading"}
          textAlign={"center"}
          fontSize={"24px"}
          fontStyle={"italic"}
          fontWeight={400}
          color={"brand.background"}
        >
          Nuestro menú
        </Heading>
      </VStack>
      <VStack backgroundColor={"brand.background"} p={4} pb={10} w={"100%"}>
        <Text w={"100%"} textAlign={"center"} color={"blackAlpha.900"}>
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
        >
          Menú verano 2023
        </Button>
      </VStack>
    </VStack>
  );
};
