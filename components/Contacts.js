import React from 'react'
import {
    Box,
    Flex,
    Text,
    Avatar,
    IconButton,
    Stack,
    HStack,
    Button,
    AspectRatio,
    FormControl,
    FormLabel,
    Center,
    // FormErrorMessage,
    FormHelperText,
    Input,
} from "@chakra-ui/react"
  import Image from 'next/image'
  import { FcGoogle } from 'react-icons/fc';
  import { FaFacebook } from 'react-icons/fa';
  import { SiLinkedin, SiMessenger } from 'react-icons/si';
  import ContactForm from "../components/Contact"
  
export default function Contacts() {
  return (
      <Box>
           <div>
        <Center>
          <Box p={50}>
            <Stack>
              <Image src="/img/indos.png" width="1500px" height="700px" />
            </Stack>
          </Box>
        </Center>
      </div>
      <HStack justifyContent={'center'} align={'center'}>
        <Flex direction={{ base: "column", md: "row" }}
        >
          <div>
            <ContactForm />
          </div>
          <Box w={500} h={600} bg={'gray.100'}>
            <Center p={50} pt={200}>
              <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
                {/* Facebook */}
                <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                  <Center>
                    <Text>Continue with Facebook</Text>
                  </Center>
                </Button>
                {/* Google */}
                <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
                {/* Messenger */}
                <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
                  <Center>
                    <Text>Send to Messenger</Text>
                  </Center>
                </Button>
              </Stack>
            </Center>
          </Box>
        </Flex>
      </HStack>
    </Box>
  )
}
