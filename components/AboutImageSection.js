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

export default function StrukturSlide() {
  return (
    <Flex
      pt={20}
      w={'full'}
      h={'60vh'}
      backgroundImage={
        'url("/img/g3.jpg")'
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
        >
          <Center>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}
              align={'center'}
            >
              Tentang Kami
            </Text>
          </Center>
        </Stack>
      </VStack>
    </Flex>
  );
} 