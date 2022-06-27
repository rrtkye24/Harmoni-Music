import { Box, Flex, Text, Heading} from "@chakra-ui/react";
import NextLink from "next/link";

export default function HomeAbout() {
  return (
    <Flex
      h={{ base: "auto", md: "calc(90vh - 100px)" }}
      p={10}
   
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "stretch" }}
      bg={"whitesmoke"}
      id='visimisi' pt={30}
    >
      <Box
        w={{ base: "100%", md: "50%" }}
        mt="10vh"
        ml={5}
        mr={3}
        borderRightWidth={{ base: "0px", md: "2px" }}
        borderBottomWidth={{ base: "2px", md: "0px" }}
        p={3}

        borderColor="black"
        align="center">
        <Heading as="h2" fontSize="28px" mt="5%" textColor="black" mb={3}>
          Visi
        </Heading>
       <Text  textColor="#515657"  w="100%" align="center" fontWeight="bold" fontSize="19px" >
       &quot;Bertumbuh dalam segala hal ke arah Kristus, yang adalah Kepala&quot;
        
        </Text>
        <Text fontSize="17px" fontWeight="lighter"  textColor="#222425" mt={5}>
        &quot;Tetapi dengan teguh berpegang kepada kebenaran di dalam kasih kita bertumbuh di dalam segala hal ke arah Dia, Kristus, yang adalah Kepala.&quot;
        </Text>
        <Text fontSize="18px" mt={2} float="right" >
          ( Efesus 4:15 )
        </Text>

      </Box>
      <Box w={{ base: "100%", md: "50%" }} h="100%" p={8} pt={16} >
      <Heading as="h2" fontSize="28px" mt="5%" textColor="black" mb={3}align="center">
          Misi
        </Heading>
        <Text  textColor="#515657"  w="100%"  fontWeight="bold" fontSize="18px" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec quam sollicitudin, as turpis, sit amet dictum sapien rhoncus et. Proin at erat vitae sapien tempus ullamcorper eget eget nulla. Mauris dolor ipsum, feugiat eget ante eu, aliquet vestibulum erat. Pellentesque luctus nisl id nisi posuere ullamcorper. Donec non metus nec lectus fringilla suscipit ac ac sapien.
        </Text>
        

      </Box>

    </Flex>
  );
}