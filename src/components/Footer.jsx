import {
  HStack,
  VStack,
  Text,
  Icon,
  UnorderedList,
  ListItem,
  Link,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import logoFooter from "../assets/logo-footer.svg";

const Footer = () => {
  return (
    <VStack
      alignItems={"stretch"}
      backgroundColor={"brand.background"}
      px={{ base: 4, lg: 12 }}
      pt={16}
      pb={4}
    >
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={2}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={"space-between"}
        color={"whiteAlpha.900"}
        as={"footer"}
        margin={"0 auto"}
        w={"90%"}
      >
        <GridItem>
          <Image margin={"0 auto"} src={logoFooter} />
        </GridItem>
        <GridItem>
          <UnorderedList
            gap={2}
            textAlign={"left"}
            display={{ base: "none", lg: "flex" }}
            flexDirection={"column"}
            justifyContent={"space-between"}
            m={0}
            listStyleType={"none"}
          >
            <ListItem>
              <Link
                _hover={{ color: "mainColor", fontWeight: 700 }}
                href="/#servicios"
              >
                Servicios
              </Link>
            </ListItem>
            <ListItem>
              <Link
                _hover={{ color: "mainColor", fontWeight: 700 }}
                href="/#oficinas"
              >
                Oficinas
              </Link>
            </ListItem>
            <ListItem>
              <Link
                _hover={{ color: "mainColor", fontWeight: 700 }}
                href="/#blog"
              >
                Blog
              </Link>
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem>
          <VStack alignItems={{ base: "center", lg: "flex-end" }}>
            <UnorderedList
              gap={2}
              textAlign={{ base: "center", lg: "right" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              m={0}
              listStyleType={"none"}
            >
              <ListItem>
                <Link
                  color={"brand.acentColor"}
                  _hover={{ textDecoration: "none" }}
                  className="hover-underline-animation-footer"
                  isExternal
                  href="https://goo.gl/maps/EGdadLTqm6g1G4wt5"
                >
                  {" "}
                  Juan Domingo Perón, B8105,
                  <br /> Monte Hermoso, Buenos Aires
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color={"brand.acentColor"}
                  _hover={{ textDecoration: "none" }}
                  className="hover-underline-animation-footer"
                  isExternal
                  href="mailto:swwwing.ar@gmail.com"
                >
                  swwwing.ar@gmail.com
                </Link>
              </ListItem>
            </UnorderedList>
            <HStack gap={4} fontSize={"1rem"}>
              <Link
                as={motion.a}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/swwwing.ok/"
                isExternal
              >
                <Icon color={"brand.secondaryColor"} as={BsInstagram} />
              </Link>
              <Link
                as={motion.a}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/company/swwwing/"
                isExternal
              >
                <Icon color={"brand.secondaryColor"} as={BsLinkedin} />
              </Link>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
      <HStack pt={4} justifyContent={"center"} color={"brand.acentColor"}>
        <Link
          href="https://www.swwwing.com.ar"
          isExternal
          _hover={{ textDecoration: "none" }}
          className="hover-underline-animation-footer"
        >
          <Text textAlign={"center"} fontSize={".8rem"}>
            © Swwwing Agency 2023 - All rights reserved
          </Text>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Footer;
