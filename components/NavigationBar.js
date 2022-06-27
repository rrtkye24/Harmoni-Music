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
        my={5}
      >
        {text}
      </Button>
    </NextLink>
  )
}

function LogoGSPDI({ isOpen }){
  return (
    <NextLink href={"/"} passHref>
      <HStack id="menu-left">
        <Image src={Logo.src} h={isOpen ? "30px" : "50px"} alt="logo" />
        <Text textAlign="start" fontSize="xl" color="black">
          <Text as="b">{"GSPDI"}</Text>
          Church
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
      bg={semiTransparentWhite}
      backdropFilter="blur(4px)"
      borderBottom={"1px solid #f8f8f8"}
    >
      <LogoGSPDI isOpen={isOpen} />

      <Flex
        alignItems={"center"}
        zIndex={9999}
        justifyContent={"space-between"}
        display={{ base: "none", md: "flex" }}
        size={"sm"}
        mr={4}
        id="menu-right"
      >
        <NavButton href="/" text="Beranda" />
        <NavButton href="/about" text="Tentang Kita" />
        <NavButton href="/blog" text="Blog" />
        <NavButton href="/struktur" text="Struktur" />
        <NavButton href="/contact" text="Hubungi Kami" />
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
          mt={170}
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
              <Menu>
                <MenuButton>
                  <Button
                    as="a"
                    fontSize={16}

                    _hover={{ bg: "whiteAlpha.400" }}
                    _focus={{ boxShadow: "outline" }}
                    variant="ghost"
                    aria-label="About"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Tentang Kami
                  </Button>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NextLink href="/about/#visimisi" passHref>
                      <Button
                        fontSize={16}
                        as="a"
                        aria-label="visi-misi"
                        colorScheme="teal"
                        variant="ghost"
                      >
                        Visi & Misi
                      </Button>
                    </NextLink>
                  </MenuItem>
                  <MenuItem>
                    <NextLink href="/about/#sejarah" passHref>
                      <Button
                        fontSize={16}
                        as="a"
                        aria-label="sejara"
                        colorScheme="teal"
                        variant="ghost"
                      >
                        Sejarah
                      </Button>
                    </NextLink>
                  </MenuItem>
                  <MenuItem>
                    <NextLink href="/struktur" passHref>
                      <Button
                        as="a"
                        fontSize={16}
                        aria-label="struktur"
                        colorScheme="teal"
                        variant="ghost"
                      >
                        Struktur Organisasi
                      </Button>
                    </NextLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Center>
            <Center w="100%"h="24px">
              <NextLink href="/blog" passHref>
                <Button
                  as="a"
                  fontSize={16}
                  aria-label="visi-misi"
                  _hover={{ bg: "whiteAlpha.400" }}
                  _focus={{ boxShadow: "outline" }}
                  variant="ghost"
                >
                  Kegiatan
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
                  Hubungi Kami
                </Button>
              </NextLink>
            </Center>
          </VStack>
        </Box>
      ) : null}
    </Flex>
  )
}
