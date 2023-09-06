import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    // Recordá siempre instalar las nuevas fuentes desde https://fontsource.org/
    heading: "'Cinzel Variable', sans-serif",
    secondaryHeading: "'Lora Variable', sans-serif",
    body: `'Montserrat Variable', sans-serif`,
  },
  colors: {
    brand: {
      mainColor: "#CF9A84",
      secondaryColor: "#8BA892",
      acentColor: "#50667F",
      background: "#F6F5E3",
      whiteBrand: "#FFFFFF",
    },
  },
});

export default theme;
