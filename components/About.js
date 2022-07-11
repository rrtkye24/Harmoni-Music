import React, { useEffect, useRef } from 'react';
import {
    Box,
    Flex,
    Text,
    Avatar,
    IconButton,
    HStack,
    Image,
    Center,
    useColorModeValue,
    Button,
    Stack,
    Container,
    SimpleGrid,
    Heading,
    Link
} from "@chakra-ui/react"
import { AiOutlineWhatsApp, AiOutlineArrowDown } from "react-icons/ai"
import NextLink from "next/link"

function Video() {
    const videoRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            videoRef.current.play()
        }, 5000)
    }, []);
    return (
        <Stack direction={['column', 'row']} p='5'>
            <Box w='25  0px'>
                <video
                    ref={videoRef}
                    controls
                    loop
                    muted
                    style={{}}>
                    <source src='/video/harmony.mp4' />
                </video>
            </Box>
            <Box align='center' lineHeight={2.4}>
                <Heading>Sedikit Cerita</Heading>
                <Text mt={10} fontSize={{ base: 12, md: 18 }}>Harmony music baru dirintis pada tahun 2022 dan ditempatkan di Kota Bengkulu, tujuan dari adanya les musik ini untuk membentuk, mengembangkan, dan melatih skill musikalitas dan akan sangat menjamin kualitas musikalitas anda </Text>
            </Box>
        </Stack>
    )
}
function Tentangkami() {
    return (
        <Box p='10' bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}>
            <Text fontSize={{ base: '16', md: "20" }} color="black" fontWeight={600} align='center'>
                Metode mengajar saya adalah praktek, tidak basa basi, interaktif dan kreatif,
                kembali mengaransemen lagu yang diajarkan supaya belajar tidak membosankan.
                Evaluasi yang akan dilihat adalah murid harus bisa intens upload hasil belajar mereka di konten youtube mereka dengan
                begitu, murid akan semakin percaya diri.
            </Text>
        </Box>
    )
}
export default function About() {
    return (
        <Box p={10} className='png' id="tentang">
            <Center>
                <Box>
                    <Container maxW={'5xl'} as={Stack} spacing={5}>
                        <Center>
                            <Text className='typing-demo' fontSize={{ base: 28, md: 38 }} color="whiteAlpha.700" fontWeight="bold">
                                Tentang Harmony Music
                            </Text>
                        </Center>
                        <Box bg={useColorModeValue('white', 'gray.800')}
                            boxShadow={'2xl'}
                            rounded={'lg'}>
                            <Video />
                        </Box>
                        <Tentangkami />
                        <Center>
                            <Link
                                href='https://wa.me/6281271886601?text=Hallo%20,saya%20telah%20mengunjungi%20website%20Harmony%20Music%20dan%20tertarik%20untuk%20mendaftar%20dan%20bergabung%20bersama%20Harmony%20Music'
                                target="_blank"
                            >
                                <Button
                                    bg={"green.300"}
                                    rounded={"full"}
                                    color={"whiteAlpha.800"}
                                    _hover={{ bg: "green.600" }}
                                    href="/#katasambutan"
                                    p={6}
                                >
                                    <AiOutlineWhatsApp size={32} />  Daftar Sekarang
                                </Button>
                            </Link>
                        </Center>
                    </Container>
                </Box>
            </Center>
        </Box>

    )
}