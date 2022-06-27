
import { NextSeo } from "next-seo"
// Local
import NavigationBar from "../components/NavigationBar"
import Hero from "../components/Hero"
import KataSambutan from "../components/KataSambutan"
import KataSambutanFloat from "../components/KataSambutanFloat"
import PengakuanIman from "../components/PengakuanIman"
import BlogPreview from "../components/BlogPreview"
import Hymne from "../components/Hymne"
import Footer from "../components/Footer"
import { client, sanityImageUrl } from "../sanity"
import ImageSlider from '../components/ImageSlide'
import Pengakuan from "../components/PengakuanImans"

// For SEO purposes, meta and open graph
function MetaHeader() {
  const seoConfig = {
    url: "https://www.gspdi.com",
    title: "GSPDI Church Indonesia",
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

export default function Home({ recentPosts }) {
  return (
    <div className="web-container">
      <MetaHeader />
      <NavigationBar />
      <div className="content">
        <div>
          <ImageSlider />
        </div>
        <KataSambutan />
        <PengakuanIman />
        <Pengakuan />
        <BlogPreview recentPosts={recentPosts} />
        <Hymne />
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const recentPosts = await client.fetch(
    `*[_type == 'post'] | order(_publishedAt desc)[0..7]{
          slug,
          title,
          excerpt,
          description,
          mainImage,
          _updatedAt
        }`
  )

  const parsedRecentPosts = recentPosts.map((doc) => {
    return {
      ...doc,
      mainImageUrl: sanityImageUrl(doc.mainImage)
        .width(400)
        .height(250)
        .auto("format")
        .url(),
    }
  })

  //Incremental Static Regeneration
  return {
    props: {
      recentPosts: parsedRecentPosts,
    },
    revalidate: 3600 * 8,
  }
}
