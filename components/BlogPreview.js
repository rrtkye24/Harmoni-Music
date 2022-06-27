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

function Post({ doc }) {
  return (
    <Box margin={{ base: 5, sm: 3 }}>
      <Image
        alt={doc.title}
        src={doc.mainImageUrl}
        style={{
          minWidth: "120px",
          height: "auto",
          filter: "brightness(1.2)",
        }}
        width={{ sm: "100%", md: "220px" }}
      />
      <Flex direction="column">
        <Text as="b" marginTop={"5px"}>
          {doc.title}
        </Text>
        <Text>{doc.excerpt}</Text>
      </Flex>
    </Box>
  )
}

export default function BlogPreview({ recentPosts }) {
  return (
    <Flex
      id="BlogPreview"
      justify={"center"}
      direction="column"
      align="center"
      paddingTop={10}
      paddingBottom={10}
      bg="#fafafa"
    >
      <Box maxW={1080} textAlign="center">
        <Text fontSize={24} as="b">
          Blog & Kegiatan Terbaru
        </Text>
      </Box>
      <Box maxW={1080}>
        <Flex mt={10} wrap="wrap" align="center" justify={"center"}>
          {recentPosts.map((doc) => (
            <Post key={doc.slug.current} doc={doc} />
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
