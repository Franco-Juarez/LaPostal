import Flicking from "@egjs/react-flicking";
import { HStack, Image } from "@chakra-ui/react";
import images from "./Images";

const Carrousel = () => {
  return (
    <>
      <HStack display={{ base: "none", lg: "flex" }}>
        <Flicking
          preventClickOnDrag={true}
          panelsPerView={3}
          align={"prev"}
          circular={true}
          renderOnlyVisible={true}
        >
          {images.map((image) => (
            <Image key={image.id} w={"100%"} src={image.image} />
          ))}
        </Flicking>
      </HStack>
      <HStack display={{ base: "flex", lg: "none" }}>
        <Flicking
          preventClickOnDrag={true}
          panelsPerView={1}
          align={"prev"}
          circular={true}
          renderOnlyVisible={true}
        >
          {images.map((image) => (
            <Image key={image.id} w={"100%"} src={image.image} />
          ))}
        </Flicking>
      </HStack>
    </>
  );
};

export default Carrousel;
