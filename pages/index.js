
import { NextSeo } from "next-seo"
import NavigationBar from "../components/NavigationBar"
import ImageSlider from '../components/ImageSlide'
import About from "../components/About"
import Benefit from "../components/Benefit"
import Program from "../components/Program"
import Browsur from "../components/Browsur"
function MetaHeader() {
  const seoConfig = {
    url: "https://www.gspdi.com",
    title: "Harmony Music",
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

export default function Home() {
  return (
    <div className="web-container">
      <MetaHeader />
      <NavigationBar />
        <div style={{zIndex: 0}}>
        <ImageSlider />
      </div>
      <div style={{ zIndex: 10000 }}  mt={'100vh'}>
        <About />
        <Benefit />
        <Program/>
      </div>
      </div>
  )
}
