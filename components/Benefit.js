import React from 'react'
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    Center,
    Button,
    Icon,
} from '@chakra-ui/react';

import { AiOutlineWhatsApp, AiOutlineArrowDown } from "react-icons/ai"
import { FcBusinesswoman, FcAlarmClock, FcNews, FcMoneyTransfer } from "react-icons/fc"
import { FaUserFriends } from "react-icons/fa"
import { TbMultiplier2X, TbDiscount2 } from "react-icons/tb"
import NextLink from "next/link"
const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const Icons = ({
    icon
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            {icon}
        </Flex>
    );
};

export default function Benefit() {
    return (
        <Box p={10} className='jpg' id="keuntungan">
            <Center>
                <Box bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.700')} rounded="50px" boxShadow={'2xl'}>
                    <Container maxW={'5xl'} py={16} as={Stack} spacing={12}>
                        <Stack spacing={0} align={'center'}>
                            <Heading>Mengapa harus belajar di Harmony Music ?</Heading>
                            <Text>keuntungan apa saja yang anda dapat</Text>
                        </Stack>
                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            spacing={{ base: 8, md: 4, lg: 8 }}>
                            <Testimonial>
                                <TestimonialContent>
                                    <TestimonialHeading>Free Trial 2x</TestimonialHeading>
                                    <TestimonialText>
                                        Uji coba belajar secara gratis sebanyak 2 kali
                                    </TestimonialText>
                                </TestimonialContent>
                                <Icons icon={<FcNews size={38} />} />
                            </Testimonial>
                            <Testimonial>
                                <TestimonialContent>
                                    <TestimonialHeading>Best Teacher</TestimonialHeading>
                                    <TestimonialText>
                                        Pengajar yang asik dan kompeten dalam bidangnya
                                    </TestimonialText>
                                </TestimonialContent>
                                <Icons icon={<FcBusinesswoman size={38} />} />
                            </Testimonial>
                            <Testimonial>
                                <TestimonialContent>
                                    <TestimonialHeading>50% OFF</TestimonialHeading>
                                    <TestimonialText>
                                        diskon biaya pendaftaran sebesar 50%
                                    </TestimonialText>
                                </TestimonialContent>
                                <Icons icon={<TbDiscount2 size={38} />} />
                            </Testimonial>
                        </Stack>
                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            spacing={{ base: 10, md: 4, lg: 10 }}
                        >
                            <Testimonial>
                                <TestimonialContent>
                                    <TestimonialHeading>Fleksible</TestimonialHeading>
                                    <TestimonialText>
                                        Jadwal bisa kapan saja sesuai dengan kebutuhan
                                    </TestimonialText>
                                </TestimonialContent>
                                <Icons icon={<FcAlarmClock size={38} />} />
                            </Testimonial>
                            <Testimonial>
                                <TestimonialContent>
                                    <TestimonialHeading>All Age</TestimonialHeading>
                                    <TestimonialText>
                                        Terbuka untuk semua usia baik anak-anak, remaja, maupun dewasa
                                    </TestimonialText>
                                </TestimonialContent>
                                <Icons icon={<FaUserFriends size={38} />} />
                            </Testimonial>
                            <Testimonial>
                                <TestimonialContent>
                                    <TestimonialHeading>Affordable Price</TestimonialHeading>
                                    <TestimonialText>
                                        Harga terjangkau dengan kualitas terbaik
                                    </TestimonialText>
                                </TestimonialContent>
                                <Icons icon={<FcMoneyTransfer size={38} />} />
                            </Testimonial>
                        </Stack>
                    </Container>
                </Box>
            </Center>
        </Box>
    )
}

