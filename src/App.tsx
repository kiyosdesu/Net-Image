import { Box, VStack } from "@chakra-ui/react";
import ImageProvider from "./context/imageContext";
import NavBar from "./components/NavBar";
import ImageContainer from "./components/ImageContainer";
import InputBox from "./components/InputBox";

const App = () => {
  return (
    <ImageProvider>
      <VStack>
        <Box
          width="100%"
          bg="
      Teal 400"
        >
          <NavBar heading="WhereIsMyImage" />
        </Box>
        <Box width="100%">
          <InputBox />
        </Box>
        <Box>
          <ImageContainer />
        </Box>
      </VStack>
    </ImageProvider>
  );
};

export default App;
