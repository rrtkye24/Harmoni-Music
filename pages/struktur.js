import Aboutimage from "../components/AboutImage";
import { Box, Container } from "@chakra-ui/react/";
import { NextSeo } from "next-seo"
import SocialProfileWithImage from "../components/struktur";
import NavigationBar from "../components/NavigationBar";
import AboutStruktur from "../components/AboutStruktur";
import Footer from "../components/Footer";
import Strukturs from "../components/Strukturs";
import StrukturSlide from "../components/StrukturSlide";

function MetaHeader() {
    const seoConfig = {
        url: "https://www.gspdi.com",
        title: "Struktur Organisasi - GSPDI Church Indonesia",
        description:
            "To love one another in Christ, to empower and unify youths in local churches. " +
            "Biro Pemuda dan Anak Hamba Tuhan Gereja Sidang Pantekosta Di Indonesia.",
    }
    return (
        <NextSeo
            title={seoConfig.title}
            description={seoConfig.description}
            openGraph={{
                url: seoConfig.url,
                title: seoConfig.title,
                description: seoConfig.description,
                site_name: seoConfig.url,
            }}
        />
    )
}
export default function Struktur() {
    return (
        <Box>
            <MetaHeader />
            <NavigationBar />
            {/* <SocialProfileWithImage /> */}
            <StrukturSlide/>
            <Container maxW={'120ch'} pt={20} pb={20}>
                <Aboutimage />
                {/* <AboutStruktur /> */}
            </Container>
            <Container maxW={'160ch'} p={10}>
            <Strukturs />
            </Container>
            <Footer />
        </Box>
    );
}
