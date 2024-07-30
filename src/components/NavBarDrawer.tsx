import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { CloseIcon, ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";

function NavBarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <HStack justifyContent="space-evenly">
              <Button onClick={onClose}>
                <CloseIcon />
              </Button>
              <ColorModeSwitch />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="2xl">About</Text>
            <Text fontSize="2xl">Contact</Text>
            <Text fontSize="2xl">
              Portfolio
              <ExternalLinkIcon />
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBarDrawer;
