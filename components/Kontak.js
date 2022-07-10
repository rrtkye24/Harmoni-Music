import { useColorModeValue, Box, Heading, Text, Stack, Center, Button, Link } from '@chakra-ui/react'
import {AiOutlineWhatsApp} from 'react-icons/ai'
export default function Contact() {
    return (
        <Box className='jpg' id='kontak'>
            <Center p='10' >
                <Stack align={'center'} lineHeight='2.0' bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.700')} rounded="50px" p='5' boxShadow={'2xl'}>
                    <Heading>Kontak & FAQ</Heading>
                    <Text as='samp' fontSize={{base: '14', md:'2xl'}} align='center'>Harmony music adalah pilihan terbaik bagi Anda & Keluarga untuk belajar dan meningkatkan skill bermusik agar lebih Handal dan Berkualitas.</Text>
                    <Text as='samp' fontSize={{base: '14', md:'2xl'}} align='center'>Mau daftar LES MUSIK DI HARMONY MUSIC? Atau Masih Ada Pertanyaan yang Belum Terjawab? Langsung Klik Tombol Whatsapp Di Bawah Ya!</Text>
                    <Link
                        href="https://wa.me/6281271886601?text=Hallo%20,saya%20telah%20mengunjungi%20website%20Harmony%20Music%20dan%20tertarik%20untuk%20mendaftar%20dan%20bergabung%20bersama%20Harmony%20Music"
                        target="_blank"
                    >
                        <Button
                            mt='15'
                            bg={"green.400"}
                            rounded={"full"}
                            color={"whiteAlpha.900"}
                            _hover={{ bg: "green.600" }}
                            p={6}
                        >
                            <AiOutlineWhatsApp size={32} /> <b /> Daftar Sekarang
                        </Button>
                    </Link>
                </Stack>
            </Center>
        </Box>
    )
}
