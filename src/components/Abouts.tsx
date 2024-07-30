import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";

const Abouts = () => {
  return (
    <HStack justifyContent="space-evenly">
      <Text fontSize={{ sm: "2xl" }}>About</Text>
      <Text fontSize={{ sm: "2xl" }}>Contact</Text>
      <Text fontSize={{ sm: "2xl" }}>
        Portfolio <ExternalLinkIcon />
      </Text>
    </HStack>
  );
};

export default Abouts;
