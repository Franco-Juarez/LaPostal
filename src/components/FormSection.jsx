import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import Form from "./Form";
import formImageMobile from "../assets/formImage.png";
import formImageDesktop from "../assets/formImageDesktop.png";

const FormSection = () => {
  return (
    <VStack pt={5} backgroundColor={"brand.secondaryColor"}>
      <Image
        display={{ base: "block", lg: "none" }}
        zIndex={2}
        mb={"-60px"}
        src={formImageMobile}
      />
      <Image
        display={{ base: "none", lg: "block" }}
        zIndex={2}
        mb={"-80px"}
        src={formImageDesktop}
      />
      <VStack pb={8} px={5} pt={24} backgroundColor={"brand.acentColor"}>
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
          w={{ base: "100%", lg: "50%" }}
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
