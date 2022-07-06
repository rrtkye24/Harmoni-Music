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
    Container
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
        <video
            ref={videoRef}
            controls
            width="250"
            loop
            muted
            style={{}}>
            <source src='/video/harmony.mp4' />
        </video>
    )
}
function Tentangkami() {
    return (
        <HStack>
            <Box ml={20}>
                <Video />
            </Box>
            <Box
                id="tentang"
                w={{ base: "100%", md: "50%", lg: "80%" }}
                //   h={{ base: "100%", md: "50%" }}
                align=""
                role={'group'}
                p={8}
                // maxW={'330px'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                direction={{ base: 'row', lg: 'row' }}
                zIndex={1}
            >
                <HStack>
                    <Text fontSize="20" color="black">
                        Metode mengajar saya adalah praktek, tidak basa basi, interaktif dan kreatif,
                        kembali mengaransemen lagu yang diajarkan supaya belajar tidak membosankan.
                        Evaluasi yang akan dilihat adalah murid harus bisa intens upload hasil belajar mereka di konten youtube mereka dengan
                        begitu, murid akan semakin percaya diri.
                    </Text>
                    <Image alt='' width={300} src='/img/logo.png' />
                </HStack>
            </Box>
        </HStack>
    )
}
export default function About() {
    return (
        <Box p={10} className='png'>
            <Center>
                <Box>
                    <Container maxW={'5xl'}  as={Stack} spacing={5}>
                        <Center>
                            <Text className='typing-demo' fontSize="38" color="whiteAlpha.700" fontWeight="bold">
                                Tentang Harmony Music
                            </Text>
                        </Center>
                        <Flex
                            justify={"center"}
                            id="tentangkami"
                            p={6}
                        >
                            <Tentangkami />
                        </Flex>
                        <Center>
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
                        </Center>
                    </Container>
                </Box>
            </Center>
        </Box>

    )
}
