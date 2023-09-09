import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import Form from "./Form";
import formImageMobile from "../assets/formImage.png";
import formImageDesktop from "../assets/formImageDesktop.png";

const FormSection = () => {
  return (
    <VStack
      py={16}
      px={20}
      id="eventos"
      backgroundColor={"brand.secondaryColor"}
    >
      <Image
        maxW={"400px"}
        p={4}
        display={{ base: "block", lg: "none" }}
        zIndex={2}
        w={"100%"}
        src={formImageMobile}
      />
      <Image
        display={{ base: "none", lg: "block" }}
        zIndex={2}
        w={"100%"}
        src={formImageDesktop}
      />
      <VStack p={4} pt={6}>
        <Heading
          fontSize={{ base: "24px", lg: "40px" }}
          fontStyle={"italic"}
          fontWeight={400}
          lineHeight={"32px"}
          fontFamily={"secondaryHeading"}
          color={"brand.background"}
        >
          Celebraciones y eventos
        </Heading>
        <Text
          w={{ base: "100%", md: "80%" }}
          color={"brand.background"}
          textAlign={"center"}
          fontSize={{ base: "16px", lg: "20px" }}
        >
          Contamos con un amplio espacio para eventos privados, como bodas,
          recepciones, cumpleaños y reuniones corporativas. Estos eventos pueden
          organizarse exclusivamente durante la temporada baja (marzo a octubre)
          y en una variedad de horarios, cualquier día de la semana. Nos
          encargamos de todos los detalles, desde el catering hasta la música,
          la decoración, el servicio de mesa y la limpieza.
        </Text>
        <Text
          textAlign={"center"}
          fontSize={{ base: "16px", lg: "20px" }}
          color={"brand.background"}
          fontWeight={"bold"}
          w={{ base: "100%", lg: "50%" }}
        >
          Completá el formulario y nos comunicaremos contigo para proporcionarte
          más información
        </Text>
        <Form />
      </VStack>
    </VStack>
  );
};

export default FormSection;
