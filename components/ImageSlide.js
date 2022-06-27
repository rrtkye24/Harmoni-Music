import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Center
} from '@chakra-ui/react';
import { transform } from 'framer-motion';
import Image from 'next/image'
import NextLink from 'next/link'
 
export default function WithBackgroundImage() {
    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                'url("/img/church.jpg")'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.500, transparent)'} 
                 >
                <Stack maxW={'2xl'} align={'center'} spacing={1}
            //    position={'fixed'} zIndex={1}
                >
                    <Center>
                        <Text
                            color={'white'}
                            _hover={{color: 'black' }}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}
                            align={'center'}
                        >
                        GSPDI 
                        </Text>
                    </Center>
                    <Stack w={{base: '200px', md: '500px'}}>
                    <Image priority alt='' src={'/img/filadelfia.png'} width='300' height='150'/>
                    </Stack>
                    <Flex justifyContent={'center'}  py={{ base: '0', md: '15' }}>
                        <Button
                            bg={'blackAlpha.800'}
                            rounded={'full'}
                            color={'whiteAlpha.700'}
                            _hover={{ bg: 'yellow.400' }}
                            href='/#katasambutan'
                        >
                            Baca Lebih Lanjut
                        </Button>
                    </Flex>
                </Stack>
            </VStack>
        </Flex>
    );
} 