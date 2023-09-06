import Flicking from "@egjs/react-flicking";
import { Image } from "@chakra-ui/react";
import images from "./Images";

const Carrousel = () => {
  return (
    <>
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
    </>
  );
};

export default Carrousel;
