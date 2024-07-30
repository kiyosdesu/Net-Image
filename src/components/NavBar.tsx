import { HStack, Text, Image, Box, Show, Hide, VStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import NavBarDrawer from "./NavBarDrawer";
import Abouts from "./Abouts";

interface Props {
  heading: string;
}
const NavBar = ({ heading }: Props) => {
  return (
    <VStack gap="10">
      <Box width="100%">
        <HStack justifyContent="space-between" padding="10px">
          <Box boxSize="20">
            <Image
              borderRadius="full"
              src="https://scontent-nrt1-2.xx.fbcdn.net/v/t1.18169-1/13614921_617618258388317_4750378644589585010_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=e4545e&_nc_ohc=IzgmvuTULOEQ7kNvgFK1RL6&_nc_ht=scontent-nrt1-2.xx&oh=00_AYBpMM-APhqvsmMD1uQFjobhZqih6qkP3KoJYPWWilhRLA&oe=66A35F75"
            />
          </Box>
          <Text fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}>
            {heading}
          </Text>
          <Hide below="sm">
            <ColorModeSwitch />
          </Hide>
          <Show below={"sm"}>
            <Box position="absolute" top="0" right="0">
              <NavBarDrawer />
            </Box>
          </Show>
        </HStack>
      </Box>
      <Show above={"sm"}>
        <Box width="100%">
          <Abouts />
        </Box>
      </Show>
    </VStack>
  );
};

export default NavBar;
