import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import PopUpBtn from "./PopUpBtn";

const Form = () => {
  return (
    <FormControl
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      py={5}
      width={{ base: "100%", lg: "50%" }}
      isRequired
    >
      <FormLabel color={"brand.background"}>Nombre</FormLabel>
      <Input
        backgroundColor={"#FFFFFF"}
        borderRadius={"none"}
        _placeholder={{ color: "#CCCCCC" }}
        placeholder="Nombre"
      />
      <FormLabel color={"brand.background"}>Mail</FormLabel>
      <Input
        backgroundColor={"#FFFFFF"}
        borderRadius={"none"}
        _placeholder={{ color: "#CCCCCC" }}
        type="email"
        placeholder="Mail"
      />
      <HStack>
        <Box w={"50%"}>
          <FormLabel pt={2} color={"brand.background"}>
            Fecha Probable
          </FormLabel>
          <Input
            backgroundColor={"#FFFFFF"}
            borderRadius={"none"}
            className="dataInput"
            _placeholder={{ color: "#CCCCCC" }}
            type="date"
            placeholder="Fecha"
          />
        </Box>
        <Box w={"50%"}>
          <FormLabel pt={2} color={"brand.background"}>
            Nro de invitados
          </FormLabel>
          <Input
            backgroundColor={"#FFFFFF"}
            borderRadius={"none"}
            _placeholder={{ color: "#CCCCCC" }}
            type="number"
            placeholder="Invitados"
          />
        </Box>
      </HStack>
      <FormLabel pt={2} color={"brand.background"}>
        Detalles del evento
      </FormLabel>
      <Textarea
        backgroundColor={"#FFFFFF"}
        borderRadius={"none"}
        _placeholder={{ color: "#CCCCCC" }}
        placeholder="Detalles del evento"
      ></Textarea>
      <VStack>
        <PopUpBtn btnName={"Enviar consulta"} />
      </VStack>
    </FormControl>
  );
};

export default Form;
