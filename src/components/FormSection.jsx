import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import Form from "./Form";
import formImage from "../assets/formImage.png";

const FormSection = () => {
  return (
    <VStack pt={5} backgroundColor={"brand.secondaryColor"}>
      <Image zIndex={2} mb={"-60px"} src={formImage} />
      <VStack pb={8} px={5} pt={14} backgroundColor={"brand.acentColor"}>
        <Heading
          fontSize={"24px"}
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
          color={"whiteAlpha.900"}
          textAlign={{ base: "center", lg: "left" }}
          fontSize={"16px"}
        >
          Contamos con un amplio espacio para eventos privados, como bodas,
          recepciones, cumpleaños y reuniones corporativas. Estos eventos pueden
          organizarse exclusivamente durante la temporada baja (marzo a octubre)
          y en una variedad de horarios, cualquier día de la semana. Nos
          encargamos de todos los detalles, desde el catering hasta la música,
          la decoración, el servicio de mesa y la limpieza.
        </Text>
        <Text
          textAlign={{ base: "center", lg: "left" }}
          color={"brand.background"}
          fontWeight={"bold"}
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
