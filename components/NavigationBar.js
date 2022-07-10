import { Image, VStack } from "@chakra-ui/react"
import Logo from "../public/img/logo.png"
import {
  Text,
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Center,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons"

// const Links = ['Beranda', 'Tentang Kami', 'Kegiatan', 'Hubungi Kami'];

const semiTransparentWhite = "#ffffffe8"

function NavButton({ href, text }) {
  return (
    <NextLink href={href}>
      <Button
        as="a"
        variant="ghost"
        aria-label={text}
        color="black"
        _hover={{ bg: "whiteAlpha.400" }}
        _focus={{ boxShadow: "outline" }}
        my={4}
      >
        {text}
      </Button>
    </NextLink>
  )
}

function LogoHarmony({ isOpen }){
  return (
    <NextLink href={"/"} passHref>
      <HStack id="menu-left">
        <Image rounded={'full'} src={Logo.src} h={isOpen ? "40px" : "40px"} alt="logo" />
        <Text textAlign="start" fontSize="l" color="black">
          <Text as="b">{"Harmony"}</Text>
          Music
        </Text>
      </HStack>
    </NextLink>
  )
}

export default function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      id="NavigationBar"
      display={{ base: "flex", md: "flex" }}
      size={"md"}
      as="nav"
      w="100%"
      px="6"
      py="1"
      mr={4}
      zIndex={9999}
      align="center"
      justify="space-between"
      position="fixed"
      bg={'rgba(255,255,255,0.3)'}
      backdropFilter="blur(1px)"
      // borderBottom={"1px solid #ffffff"}
    >
      <LogoHarmony isOpen={isOpen} />

      <Flex
        alignItems={"center"}
        zIndex={9999}
        justifyContent={"space-between"}
        display={{ base: "none", md: "flex" }}
        size={"sm"}
        mr={4}
        id="menu-right"
      >
        <NavButton className="button-container-3" href="/" text="Home" />
        <NavButton className="button-container-3" href="/about" text="Tentang Kami" />
        <NavButton className="button-container-3" href="/daftar" text="Pendaftaran" />
        <NavButton className="button-container-3" href="/contact" text="Kontak" />
      </Flex>

      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
        color={"black"}
        bg={semiTransparentWhite}
        outline="#fff"
        id="mobile-right-menu"
      />
      {isOpen ? (
        <Box
          display={{ md: "none" }}
          ml={-6}
          align="left"
          color="black"
          position={"fixed"}
          mt={160}
          bg="rgba(255,255,255,0.86)"
          w={"full"}
        >
          <VStack alignItems="left">
            <Center w="100%"h="24px">
              <NextLink href="/" passHref>
                <Button
                  as="a"
                  fontSize={16}
                  aria-label="visi-misi"
                  _hover={{ bg: "whiteAlpha.400" }}
                  _focus={{ boxShadow: "outline" }}
                  variant="ghost"
                >
                  Beranda
                </Button>
              </NextLink>
            </Center>
            <Center w="100%"h="24px">
              <NextLink href="/about" passHref>
                <Button
                  as="a"
                  fontSize={16}
                  aria-label="visi-misi"
                  _hover={{ bg: "whiteAlpha.400" }}
                  _focus={{ boxShadow: "outline" }}
                  variant="ghost"
                >
                  Tentang Kami
                </Button>
              </NextLink>
            </Center>
            <Center w="100%"h="24px">
              <NextLink href="/daftar" passHref>
                <Button
                  as="a"
                  fontSize={16}
                  aria-label="visi-misi"
                  _hover={{ bg: "whiteAlpha.400" }}
                  _focus={{ boxShadow: "outline" }}
                  variant="ghost"
                >
                  Pendaftaran
                </Button>
              </NextLink>
            </Center>
            <Center w="100%"h="24px">
              <NextLink href="/contact" passHref>
                <Button
                  as="a"
                  fontSize={16}
                  aria-label="visi-misi"
                  _hover={{ bg: "whiteAlpha.400" }}
                  _focus={{ boxShadow: "outline" }}
                  variant="ghost"
                >
                 Kontak
                </Button>
              </NextLink>
            </Center>
          </VStack>
        </Box>
      ) : null}
    </Flex>
  )
}
