import {
  Box,
  Flex,
  Text,
  Avatar,
  IconButton,
  Stack,
  Image,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { FaFacebookSquare } from "react-icons/fa"

function ProfilKetuaUmum() {
  return (
    <Box
      id="profil-ketua-umum"
      w={{ base: "100%", md: "50%", lg: "50%" }}
      //   h={{ base: "100%", md: "50%" }}
      align="center"
    >
      <Image
        borderRadius="full"
        boxSize={{ base: "80px", md: "100px" }}
        src="img/ketua-umum.jpeg"
        alt="ketua-umum"
        mb={8}
      />
      <Text fontSize="24" color="black" fontWeight="bold">
        Pdt. Paul Daniel Massie
      </Text>
      <Text fontSize="20" color="black" mb={5}>
        Ketua Majelis Pusat
      </Text>
      <NextLink href="https://www.facebook.com/gspdifiladelfiakenduruancirebon/">
        <IconButton
          colorScheme="blue"
          aria-label="facebook"
          icon={<FaFacebookSquare />}
        />
      </NextLink>
    </Box>
  )
}

function Sambutan() {
  return (
    <Box
      id="sambutan"
      w={{ base: "100%", md: "50%" }}
      //   h={{ base: "100%", md: "50%" }}
      p={8}
      pt={2}
    >
      <Stack spacing={4}>
        <Text as="b" fontSize="24">{`Kata Sambutan`}</Text>
        <Text as="i" fontSize="20px">
          {`"Karena itu jagalah dirimu dan jagalah seluruh kawanan, karena
            kamulah yang ditetapkan Roh Kudus menjadi pemilik untuk
            menggembalakan jemaat Allah yang diperoleh-Nya dengan darah Anak-Nya
            sendiri."`}
        </Text>
        <Text fontSize="18px" mt={10} float="right" fontWeight="bold">
          {`Kisah Para Rasul 20:28`}
        </Text>
      </Stack>
    </Box>
  )
}

export default function KataSambutan() {
  return (
    <Flex
      bg="white"
      justify={"center"}
      id="katasambutan"
      // pt={"50px"}
      // pb={"50px"}
      mt={"50px"}
      mb={"50px"}
    >
      <Flex direction={{ base: "column", md: "row" }} maxW={1080}>
        <ProfilKetuaUmum />
        <Sambutan />
      </Flex>
    </Flex>
  )
}
