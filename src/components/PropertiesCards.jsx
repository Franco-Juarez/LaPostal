import { VStack, Image, Button, Heading, Text, Flex, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

// eslint-disable-next-line react/prop-types
const PropertiesCards = ({propertyName, propertyPrice, propertyLocation, propertydescripcion, propertyImage}) => {

  return (
    <GridItem
    as={motion.div}
    variants={item}
    whileHover={{ scale: 1.02}}
    whileTap={{ scale: 0.99}}
    >
      <VStack 
      minH={{base: "350px", md:"430px"}} 
      px={4}
      pt={4}
      pb={8} 
      alignItems={"flex-start"} 
      boxShadow='md' 
      borderRadius={20}
      w={"100%"} 
      justifyContent={"space-between"}
      backgroundColor={"whiteAlpha.900"}
      >
        <Image objectFit={"cover"} maxH={"200px"} w={"100%"} borderRadius={20} src={propertyImage} />
        <Flex py={2} gap={2}>
          <Button 
          fontSize={".8rem"} 
          borderRadius={20} 
          display={"inline"}
          backgroundColor={"yellow.200"}
          _hover={{backgroundColor: "yellow.100"}}
          >{propertyLocation}</Button>
          <Button 
          backgroundColor={"yellow.200"}
          _hover={{backgroundColor: "yellow.100"}}
          fontSize={".8rem"} 
          borderRadius={20} 
          display={"inline"}>Negotiable</Button>
        </Flex>
        <Heading width={"100%"} fontSize={"1.2rem"}>US${propertyPrice}</Heading>
        <Text width={"100%"} fontWeight={"bold"}>{propertyName}</Text>
        <Text width={"100%"}>{propertydescripcion}</Text>
      </VStack>
    </GridItem>
  )
}

export default PropertiesCards;