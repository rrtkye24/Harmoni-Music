import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image'
export default function SocialProfileWithImage() {
  return (
    <Stack minH={'60vh'} direction={{ base: 'column', md: 'row' }}pt={'50'}pl={'70'}pr={'70'}>
       
   
      <Box
        maxW={'33.3%'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={'img/hitm.jpg'}
          objectFit={'cover'}
          alt=''
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={'img/1.jpeg'}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} size={10}>
            Pdt. Paul Daniel Massie
            </Heading>
            <Text color={'red'} fontSize={'20'} >Ketua Umum</Text>
          </Stack>
        </Box>
      </Box>
      <Box
        maxW={'33.3%'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={'img/hitm.jpg'}
          objectFit={'cover'}
          alt=''
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={'img/2.jpeg'}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} size={10}>
             Pdt. Giarto
            </Heading>
            <Text color={'red'} fontSize={'20'}> Sekretaris Umum </Text>
          </Stack>
        </Box>
      </Box>
      <Box
        maxW={'33.3%'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={'img/hitm.jpg'}
          objectFit={'cover'}
          alt=''
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={'img/3.jpeg'}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} size={10}>
            Pdt. Merryam Jone Onibala
            </Heading>
            <Text color={'red'} fontSize={'20'}>Bendahara Umum</Text>
          </Stack>
        </Box>
      </Box>

    </Stack>
  );
}