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

const Form = () => {
  return (
    <FormControl gap={10} py={10} width={"80%"} isRequired>
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
          <FormLabel color={"brand.background"}>Fecha Probable</FormLabel>
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
          <FormLabel color={"brand.background"}>Nro de invitados</FormLabel>
          <Input
            backgroundColor={"#FFFFFF"}
            borderRadius={"none"}
            _placeholder={{ color: "#CCCCCC" }}
            type="number"
            placeholder="Invitados"
          />
        </Box>
      </HStack>
      <FormLabel color={"brand.background"}>Detalles del evento</FormLabel>
      <Textarea
        backgroundColor={"#FFFFFF"}
        borderRadius={"none"}
        _placeholder={{ color: "#CCCCCC" }}
        placeholder="Detalles del evento"
      ></Textarea>
      <VStack>
        <Button
          py={4}
          px={8}
          lineHeight={"90px"}
          fontSize={"20px"}
          fontStyle={"italic"}
          fontFamily={"secondaryHeading"}
          color={"brand.background"}
          backgroundColor={"brand.mainColor"}
          borderRadius={"none"}
          mt={4}
          width={"200px"}
          type="submit"
        >
          Enviar Consulta
        </Button>
      </VStack>
    </FormControl>
  );
};

export default Form;
