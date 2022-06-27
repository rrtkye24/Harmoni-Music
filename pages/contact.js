import { Box } from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import Image from "next/image"
import { NextSeo } from "next-seo"

import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
import Contacts from "../components/Contacts"

function MetaHeader() {
  const seoConfig = {
    url: "https://www.gspdi.com",
    title: "Hubungi Kami - GSPDI Church Indonesia",
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

export default function Contact() {
  return (
    <Box bg="#fafafa">
      <MetaHeader />
      <div>
        <NavigationBar />
      </div>
      <div>
        <Contacts/>
      </div>
      <div>
        <Footer />
      </div>
    </Box>
  )
}
