import { Text, VStack, Heading, Flex, Input } from "@chakra-ui/react";
import PopUpBtn from "./PopUpBtn";

const Banner = () => {
  return (
    <VStack
      backgroundPosition={"top"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundColor={"blackAlpha.800"}
      p={{ base: 4, lg: 12 }}
    >
      <VStack
        py={8}
        w={"90%"}
        margin={"0 auto"}
        gap={4}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <Heading
          color={"whiteAlpha.900"}
          w={{ base: "100%", md: "75%" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          Suscríbete a nuestro newsletter
        </Heading>
        <Text
          color={"whiteAlpha.900"}
          textAlign={{ base: "center", lg: "left" }}
          fontSize={"1rem"}
          w={{ base: "100%", md: "60%" }}
        >
          Recibe semanalmente en tu email las últimas novedades en materia de
          Gestión Laboral, junto con los nuevos ingresos de propiedades.
        </Text>
        <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
          <Input
            type="email"
            color="blackAlpha.900"
            backgroundColor={"#FFFFFF"}
            _placeholder={{ opacity: 1, color: "blackAlpha.900" }}
            focusBorderColor="whiteAlpha.900"
            placeholder="Email"
          ></Input>
          <PopUpBtn btnName="Suscríbete" />
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Banner;
