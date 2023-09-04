import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    // Recordá siempre instalar las nuevas fuentes desde https://fontsource.org/
    heading: "'Helvetica', sans-serif",
    body: `'Helvetica', sans-serif`,
  },
  colors: {
    mainColor: "#F5A524",
    secondaryColor: "#343E63",
  },
});

export default theme;
