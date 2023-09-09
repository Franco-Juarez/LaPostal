import { HStack, Image } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import properties from "../data/Properties.json";

const SliderImages = () => {
  const size = window.innerWidth;

  return (
    <HStack py={8}>
      <Carousel
        cellSpacing={20}
        slidesToShow={size >= 767 ? 3 : 1}
        wrapAround={true}
      >
        {properties.map((property) => {
          return <Image w={"100%"} key={property.id} src={property.image} />;
        })}
      </Carousel>
    </HStack>
  );
};

export default SliderImages;
