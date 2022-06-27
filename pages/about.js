import {
  Box,
  Flex,
  Text,
  Avatar,
  IconButton,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import AboutSection1 from "../components/AboutSection1";
import AboutImageSection from "../components/AboutImageSection";
import AboutSection11 from "../components/AboutSection11";
import SplitScreen from "../components/sejarah";
import Sejarah from "../components/sejarah1";
// Local
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"

function MetaHeader() {
  const seoConfig = {
    url: "https://www.gspdi.com",
    title: "Tentang Kami - GSPDI Church Indonesia",
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

export default function About() {
  return (
    <Box bg="#fafafa">
      <MetaHeader/>
      <NavigationBar />
      <AboutImageSection />
      <AboutSection1 />
      <SplitScreen/>
      <AboutSection11 />
      <Sejarah />
      <Footer/>
    </Box>
  )
}
