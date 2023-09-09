import { HStack, Image } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import properties from "../data/Properties.json";
import { useEffect, useState } from "react";

const SliderImages = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
    }
  }, []);

  return (
    <HStack id="galeria" py={8}>
      <Carousel
        cellSpacing={isMobile ? 0 : 20}
        slidesToShow={isMobile ? 1 : 3}
        wrapAround={true}
      >
        {properties.map((property) => {
          return <Image key={property.id} src={property.image} />;
        })}
      </Carousel>
    </HStack>
  );
};

export default SliderImages;
