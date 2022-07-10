import React from 'react'
import {
    Center,
    Box,
    Container,
    Stack,
    useColorModeValue,
    Text,
    Heading,
    Image,
    Badge,
    Collapse,
    Button,
    SimpleGrid,
    useBreakpointValue,
    IconButton
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Link from 'next/link'
import Slider from 'react-slick'

function ProgramCard({ image, badge, title, desc, url }) {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (
        <Box p={10} >
            <Box
                role={'group'}
                p={4}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                {/* <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}> */}
                <Badge colorScheme='purple'>{badge}</Badge>
                <Stack direction={['column', 'row']}>
                    <Box>
                        <Image
                            rounded={'lg'}
                            height={230}
                            width={'200em'}
                            objectFit={'cover'}
                            alt=''
                            src={image}
                        />
                    </Box>
                    <Stack direction={['column']}>
                        <Heading align={'start'} fontSize={'2xl'} fontFamily={'body'} fontWeight={800}>
                            {title}
                        </Heading>
                        <Collapse startingHeight={80} in={show}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'capitalize'}>
                                {desc}
                            </Text>
                        </Collapse>
                        <Button size='sm' onClick={handleToggle} mt='1rem'>
                            {show ? 'Kembali' : 'Selengkapnya'}
                        </Button>
                        <Link href={url}>
                            <Button size='sm' bg="whatsapp.400" _hover={{ bg: "whatsapp.600" }}>
                                Mau Daftar
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}
function Judul() {
    return (
        <Center>
            <Box
                align={'center'}
                // bg={'white'}
                width={'80%'}
                height={20}
                m={2}
            >
                <Text fontSize={{base:32,md:40}} fontWeight={800} color="white">Program Pembelajaran</Text>
            </Box>
        </Center>
    )
}
export default function Program() {
    return (
        <Box className='png' id='program'>
            <Judul />
            <Carousel />
        </Box>
    )
}
function Carousel() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [slider, setSlider] = React.useState(null);
    const top = useBreakpointValue({ base: '55%', md: '50%' });
    const side = useBreakpointValue({ base: '0%', md: '40px' });
    return (
        <Box
            position={'relative'}
            height={'full'}
            width={{ base: 'full', md: 'full' }}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                <ProgramCard
                    image={'img/logo.png'}
                    badge={'Baru'}
                    title={'KEYBOARD'}
                    desc={'Mempelajari permainan alat musik keyboard dengan fokus pembelajaran mulai dari belajar bentuk dan teori chord, pengembangan bentuk chord serta pengaplikasiannya pada lagu-lagu pop umum. Permainan keyboard pada umumnya digunakan untuk mengcover lagu-lagu pop dan bisa juga untuk format band. Pengajar memiliki background kuliah S1 di jurusan musik, berpengalaman mengajar serta profesional di bidangnya.'}
                    url=''
                />
                 <ProgramCard
                    image={'img/logo.png'}
                    badge={'Baru'}
                    title={'VOKAL'}
                    desc={'Pembelajaran vokal bertujuan untuk memperbaiki dan meningkatkan kualitas bernyanyi serta menemukan dan memaksimalkan karakter vokal yang dimiliki. Pembelajaran vokal tidak hanya belajar menyanyikan langsung sebuah lagu saja tetapi belajar juga berbagai macam teknik vokal seperti : cara menyanyi agar tidak fals, pernafasan yang benar, ketepatan pitch dan tempo, frase ring, intonasi, artikulasi, cara meningkatkan power dan masih banyak lagi. Sehingga kemampuan tersebut selanjutnya bisa diaplikasikan untuk menyanyikan berbagai pola dan karakteristik lagu yang bervariasi. Pengajar memiliki background kuliah S1 di jurusan musik, berpengalaman mengajar serta profesional di bidangnya.'}
                    url=''
                />
                <ProgramCard
                    image={'img/logo.png'}
                    badge={'Belum Tersedia'}
                    title={'GITAR ACOUSTIC'}
                    desc={'Mempelajari permainan gitar akustik dengan fokus pembelajaran mulai dari belajar bentuk dan teori chord, pengembangan bentuk chord serta pengaplikasiannya pada lagu-lagu pop umum. Permainan Gitar akustik pada umumnya digunakan untuk mengcover lagu-lagu pop dengan teknik strumming / genjreng, berbagai macam variasi chord, teknik petikan hingga permainan fingerstyle. Pengajar memiliki background kuliah S1 di jurusan musik, berpengalaman mengajar serta profesional di bidangnya.'}
                    url=''
                />
                <ProgramCard
                    image={'img/logo.png'}
                    badge={'Belum Tersedia'}
                    title={'BASS'}
                    desc={'Mempelajari permainan bass elektrik dengan fokus pembelajaran seperti fingering tangan kanan dan kiri, pengaplikasian mapping fingerboard bass, scales, improvisasi dan lain-lain. Pada pembelajaran bass elektrik tingkat lanjut  akan dipelajari juga berbagai teknik permainan bass elektrik seperti slap, walking bass, taping dan lain-lain. Berbagai teknik dan teori ini selanjutnya bisa diaplikasikan pada lagu dengan berbagai genre musik (rock, pop, blues, jazz, dan masih banyak lagi) . Pengajar memiliki background kuliah S1 di jurusan musik, berpengalaman mengajar serta profesional di bidangnya.'}
                    url=''
                />
                <ProgramCard
                    image={'img/logo.png'}
                    badge={'Belum Tersedia'}
                    title={'BIOLA'}
                    desc={'Biola merupakan keluarga alat musik gesek orchestra yang secara ukuran sedikit lebih besar dibandingkan violin. Viola memiliki karakter suara dan range nada menengah (alto) yakni berada antara range nada violin dan cello. Dalam pembelajarannya, viola mempelajari berbagai materi diantaranya seperti : cara membaca not balok, cara menggesek viola dengan baik dan benar serta berbagai macam teknik bermain viola dengan berbagai grade (tingkatan). Pengajar memiliki background kuliah S1 di jurusan musik, berpengalaman mengajar serta profesional di bidangnya.'}
                    url=''
                />
            </Slider>
        </Box>
    );
}