import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  VStack,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react"
import Image from "next/image"

export default function Header() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={'url("/img/church.jpg")'}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.500, transparent)"}
      >
        <Stack
          maxW={"2xl"}
          align={"center"}
          spacing={1}
          //    position={'fixed'} zIndex={1}
        >
          <Center>
            <Text
              color={"black"}
              fontWeight={700}
              lineHeight={1}
              fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
              align={"center"}
            >
              Harmoni <Text as={'span'} color={'blue.400'}>
            Music
          </Text>
            </Text>
          </Center>
          <Stack w={{ base: "200px", md: "500px" }}>
            <Image
              priority
              alt=""
              src={"/img/filadelfia.png"}
              width="300"
              height="150"
            />
          </Stack>
          <Flex justifyContent={"center"} py={{ base: "0", md: "15" }}>
            <Stack spacing={6} direction={"row"}>
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"orange"}
                bg={"orange.400"}
                _hover={{ bg: "orange.500" }}
              >
                Get started
              </Button>
              <Button rounded={"full"} px={6}>
                Learn more
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </VStack>
    </Flex>
  )
}
