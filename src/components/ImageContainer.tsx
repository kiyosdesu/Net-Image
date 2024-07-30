import { useContext } from "react";
import { HStack, Text } from "@chakra-ui/react";
import { ImageContext } from "../context/imageContext";
import ImageCard from "./ImageCard";

const ImageContainer = () => {
  const imagesContext = useContext(ImageContext);
  if (!imagesContext) {
    return <Text>Image context is not available.</Text>;
  }
  const { images } = imagesContext;

  return (
    <HStack flexWrap="wrap" justifyContent="center" gap="5">
      {images.map((image, index) => (
        <ImageCard key={index} image={image.urls.small} />
      ))}
    </HStack>

    // <HStack flexWrap="wrap" justifyContent="center">
    //   {images.map((image, index) => (
    //     <ImageCard key={index} image={image.urls.small} />
    //   ))}
    // </HStack>
  );
};

export default ImageContainer;
