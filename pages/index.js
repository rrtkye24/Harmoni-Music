
import React, { useState, useEffect } from 'react';
import { NextSeo } from "next-seo"
import NavigationBar from "../components/NavigationBar"
import ImageSlider from '../components/ImageSlide'
import About from "../components/About"
import Benefit from "../components/Benefit"
import Program from "../components/Program"
import Contact from "../components/Kontak"
import Footer from "../components/Footer"
import { FaAngleUp } from 'react-icons/fa';
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { Box, Link, Button} from '@chakra-ui/react'
function MetaHeader() {
  const seoConfig = {
    url: "https://www.gspdi.com",
    title: "Harmony Music",
    description:
      "Kursus Musik Online | Belajar Musik Online | Les Musik Online | Sekolah Musik Online | Tirando Music Education Ahlinya : 0812-7188-6601 (WA). ",
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
const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <Box>
          <FaAngleUp
            className="icon-position icon-style"
            onClick={goToTop}
          />
          <Link
            href="https://wa.me/6281271886601?text=Hallo%20,saya%20telah%20mengunjungi%20website%20Harmony%20Music%20dan%20tertarik%20untuk%20mendaftar%20dan%20bergabung%20bersama%20Harmony%20Music"
            target="_blank"
          >
            <Button
              bg={"blackAlpha.800"}
              rounded={"full"}
              color={"whiteAlpha.700"}
              _hover={{ bg: "green.600" }}
              p={6}
            >
              <AiOutlineWhatsApp size={32} /> <b /> Daftar Sekarang
            </Button>
          </Link>
        </Box>
      )}{" "}
    </div>
  );
};
export default function Home() {
  return (
    <div className="web-container">
      <MetaHeader />
      <NavigationBar />
      <ScrollToTop />
      <div style={{ zIndex: 0 }}>
        <ImageSlider />
        <About />
        <Benefit />
        <Program />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
