import { Box, Flex, Text, Button, ButtonGroupProps } from "@chakra-ui/react"
import NextLink from 'next/link'
export default function Hymne() {
  return (
    <Flex
      id="Hymne"
      justify={"center"}
      direction="column"
      align="center"
      className="singing-bg"
    >
      <Text fontSize={24} as="b" mt={10} color="white">
        Hymne GSPDI
      </Text>
      <Box maxW={[500,1200,1200,1080]} h={450} p={10} color="white">
        <iframe
          width={'100%'}
          height={350}
          src="https://www.youtube.com/embed/Egy-RpDD2uk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Box>
    </Flex>
  )
}
