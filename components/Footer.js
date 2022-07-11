import {
    Flex,
    Box,
    Text,
    HStack,
    VStack,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    VisuallyHidden,
    useColorModeValue,
    Divider

} from "@chakra-ui/react"
import { MdLocationOn } from 'react-icons/md'
import {
    TiSocialInstagram,
    TiSocialYoutube,
} from "react-icons/ti"
import { AiOutlineMail } from "react-icons/ai"
import { IoIosCall } from "react-icons/io"
import { forwardRef } from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"
const Logo = () => {
    return (
        <VStack align={'start'} lineHeight='0.8' ml='1'>
            <Text as='b' fontSize={{ base: 16, md: 32 }}>HARMONY MUSIC</Text>
            <Text pb='5'>Musik adalah perasaan yang bisa didengar</Text>
        </VStack>
    )
}

const SocialButton = ({ children, label, href, text }) => {
    return (
        <chakra.button
            // bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={10}
            h={8}
            mr={7}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box className="png" >
            <Box
                bg='whiteAlpha.600'
                color={'black'}
            >
                <Container as={Stack} maxW={"5xl"} py={5}>
                    <SimpleGrid
                        templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr" }}
                        spacing={8}
                    >
                        <Stack spacing={1}>
                            <Box>
                                <Logo color={useColorModeValue("gray.700", "white")} />
                            </Box>
                            <Box >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4076489.6842658203!2d98.08229039999993!3d-3.8215253999999823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36bb43044ec6a9%3A0xe7d2697ef8bd334e!2sGereja%20Pentakosta%20Indonesia%20Bengkulu!5e0!3m2!1sid!2sid!4v1657433299715!5m2!1sid!2sid"
                                    width="100%"
                                    height="250px"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <HStack mt='3'>
                                    <MdLocationOn size={24} />
                                    <Text as='b'> Gerbang Belakang UIN Stain Kota Bengkulu</Text>
                                </HStack>
                                <HStack mt='3'>
                                    <MdLocationOn size={24} />
                                    <Text as='b'> Gereja Pentakosta Indonesia Bengkulu</Text>
                                </HStack>
                            </Box>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader>
                                <Text fontSize={32}>Follow Us</Text>
                            </ListHeader>
                            <Box pt={1}>
                                <Stack direction={"column"} spacing={6}>
                                    <Flex>
                                        <SocialButton label={"Whatsapp"} href={"https://wa.me/6281271886601?text=Hallo%20,saya%20telah%20mengunjungi%20website%20Harmony%20Music%20dan%20tertarik%20untuk%20mendaftar%20dan%20bergabung%20bersama%20Harmony%20Music"}>
                                            <FaWhatsapp size={32} />
                                        </SocialButton>
                                        <ListHeader>+62 812 7188 6601</ListHeader>
                                    </Flex>
                                    <Flex>
                                        <SocialButton label={"Instagram"} href={"http://instagram.com/harmonymusic_bengkulu"}>
                                            <FaInstagram size={32} />
                                        </SocialButton>
                                        <ListHeader>@harmonymusic_bengkulu</ListHeader>
                                    </Flex>
                                    <Flex>
                                        <SocialButton label={"Gmail"} href={"/"}>
                                            <AiOutlineMail size={32} />
                                        </SocialButton>
                                        <ListHeader>harmonymusic@gmail.com</ListHeader>
                                    </Flex>
                                    <Flex>
                                        <SocialButton label={"YouTube"} href={"/"}>
                                            <FaYoutube size={32} />
                                        </SocialButton>
                                        <ListHeader>harmonymusic</ListHeader>
                                    </Flex>
                                    <Flex>
                                        <SocialButton label={"Facebook"} href={"/"}>
                                            <FaFacebook size={32} />
                                        </SocialButton>
                                        <ListHeader>harmonymusic_bkl</ListHeader>
                                    </Flex>
                                </Stack>
                            </Box>
                        </Stack>
                        {/* <Stack align={"flex-start"} m={5}>
                            <ListHeader>Menu</ListHeader>
                            <Link href={"/"}>- Beranda</Link>
                            <Link href={"/about"}>- Visi & Misi</Link>
                            <Link href={"/about/#sejarah"}>- Sejarah GSPDI</Link>
                            <Link href={"/organization"}>- Struktur Organisasi</Link>
                            <Link href={"/blog"}>- Kegiatan</Link>
                            <Link href={"/contact"}>- Hubungi Kami</Link>
                            <Link href={"https://keuangan-gspdi.vercel.app"}>- Login</Link>
                        </Stack> */}
                    </SimpleGrid>
                </Container>
            </Box>
            <Box
                bg={'whiteAlpha.600'}
                color='black'>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    spacing={3}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text fontWeight={500}>© 2022 HARMONY MUSIC.</Text>
                </Container>
            </Box>
        </Box>
    )
}
