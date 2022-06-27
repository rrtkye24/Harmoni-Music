import { Flex, Box, Text, Heading } from "@chakra-ui/react"
import NextLink from "next/link"
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
  TiLocation,
} from "react-icons/ti"
import { AiOutlineMail } from "react-icons/ai"
import { forwardRef } from "react"

// Diwrap pake forwardRef karena ada error Warning: Function components cannot be given refs
// https://github.com/vercel/next.js/issues/7915
const ButtonForwardRef = forwardRef(function Button(props, ref) {
  return (
    <Flex direction="column" align={"center"}>
      {props.children}
    </Flex>
  )
})

export default function Footer() {
  return (
    <>
    <Flex justify={"center"} >
      <Flex
        w="80%"
        justify={{ base: "space-around", md: "space-evenly" }}
        mt={12}
        maxW={1080}
       
      >
        <NextLink href="https://goo.gl/maps/AMdTKHCErANpw1VTA">
          <ButtonForwardRef>
            <TiLocation size="2rem" />
            <Text display={{ base: "none", md: "flex" }}>Location</Text>
          </ButtonForwardRef>
        </NextLink>

        <NextLink href="mailto:gspdifiladelfiakenduruan@gmail.com">
          <ButtonForwardRef>
            <AiOutlineMail size="2rem" />
            <Text display={{ base: "none", md: "flex" }}> Email</Text>
          </ButtonForwardRef>
        </NextLink>

        <NextLink href="https://www.instagram.com/gspdifiladelfia/">
          <ButtonForwardRef>
            <TiSocialInstagram size="2rem" />
            <Text display={{ base: "none", md: "flex" }}>Instagram</Text>
          </ButtonForwardRef>
        </NextLink>

        <NextLink href="https://www.youtube.com/c/GSPDIFiladelfiaKenduruan">
          <ButtonForwardRef>
            <TiSocialYoutube size="2rem" />
            <Text display={{ base: "none", md: "flex" }}>Youtube</Text>
          </ButtonForwardRef>
        </NextLink>

        <NextLink href="https://www.facebook.com/gspdifiladelfiakenduruancirebon/">
          <ButtonForwardRef>
            <TiSocialFacebook size="2rem" />
            <Text display={{ base: "none", md: "flex" }}>Facebook</Text>
          </ButtonForwardRef>
        </NextLink>

        <NextLink href="https://twitter.com/filakenduruan?fbclid=IwAR1iDTsIV6ZDHBGmUKv2sRnCJPYepwyabC_WN2X7MrWLEv77OY3JPzjnBDI">
          <ButtonForwardRef>
            <TiSocialTwitter size="2rem" />
            <Text display={{ base: "none", md: "flex" }}>Twitter</Text>
          </ButtonForwardRef>
        </NextLink>
      </Flex>
      </Flex>
      <Heading
        align="center"
        pt={50}
        fontSize={12}
        pb={1}
        color="grey"
        bg='whiteAlpha.200'
      // w={{ md: "100%", base: "80%" }}
      >
        &copy; 2022 GSPDI-FILADELFIA-KEDURUAN-CIREBON • All right reserved • Privacy Policy
      </Heading>
      </>
  )
}
