import { Box, Flex, Text, Heading, GridItem, Image } from "@chakra-ui/react"
import {
  ButtonGroup,
  IconButton,
  Avatar,
  Spacer,
  Stack,
} from "@chakra-ui/react"
function AboutSection11() {
  return (
    <Flex
      direction="column"
      align="center"
      h="500px"
      w="100%"
      bgColor="whitesmoke"
    >
      <Heading as="h2" fontSize="28px" mt="2%" textColor="black">
        Pendiri GSPDI
      </Heading>
      <Box
        w={{ base: "100%", md: "50%" }}
        h={{ base: "100%", md: "100%" }}
        ml={5}
        mr={3}
        mt={6}
        borderColor="black"
        align="center"
      >
        <GridItem colSpan={4}>
          <Image
            boxSize="30%"
            mt={2}
            borderRadius={10}
            objectFit="cover"
            src="img/Picture1.jpg"
            alt="Dan Abramov"
          />
        </GridItem>
        <Text fontSize="25" color="black" fontWeight="bold">
          Pdt. Prof. Dr. Theodorus William Korompis
        </Text>
        <Text fontSize="22" color="black" mb={1}>
          Ketua Umum GSPDI 1951 – 1991
        </Text>
        <Text fontSize="17" color="black">
          Gembala Jemaat GSPDI Filadelfia I, II & III Bandung
        </Text>
      </Box>
    </Flex>
  )
}

export default AboutSection11
