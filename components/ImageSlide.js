import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Center,
    Box,
    HStack
} from "@chakra-ui/react"
import { AiOutlineWhatsApp, AiOutlineArrowDown } from "react-icons/ai"
import Browsur from "./Browsur"
export default function WithBackgroundImage() {
    return (
        <Flex
            w={"full"}
            h={"100vh"}
            backgroundImage={'url("/img/thumbnail6.jpg")'}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
        >
            <VStack
                w={"full"}
                justify={"center"}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={"linear(to-r, blackAlpha.100, transparent)"}
            >
                <Stack
                    maxW={"2xl"}
                    align={"center"}
                    spacing={1}
                    // position={"fixed"}
                    // zIndex={1}
                    mt={24}
                >
                    <Center>
                        <Text
                            color={"white"}
                            fontWeight={200}
                            lineHeight={6.9}
                            fontSize={useBreakpointValue({ base: "xl", md: "4xl" })}
                            align={"center"}
                        >
                            your best music skill partner
                        </Text>
                    </Center>
                    {/* <Stack w={{base: '200px', md: '500px'}}>
                    <Image priority alt='' src={'/img/filadelfia.png'} width='300' height='150'/>
                    </Stack> */}
                    <HStack justifyContent={'center'} align={'center'}>
                        <Flex direction={{ base: "column", md: "row" }} py={{ base: "0", md: "0" }}>
                            <Box mt={4}>
                                <Button
                                    bg={"blackAlpha.800"}
                                    rounded={"full"}
                                    color={"whiteAlpha.700"}
                                    _hover={{ bg: "green.600" }}
                                    href="/#katasambutan"
                                    p={6}
                                >
                                    <AiOutlineWhatsApp size={32} /> <b /> Daftar Sekarang
                                </Button>
                            </Box>
                            <Box mt={4}>
                                <Browsur/>
                            </Box>
                        </Flex>
                    </HStack>
                </Stack>
            </VStack>
        </Flex>
    )
}
