import { Box, Flex, Button, Image } from "@chakra-ui/react"
import { client, sanityImageUrl } from "../../sanity"
import { NextSeo } from "next-seo"
import Link from "next/link"
import { useState } from "react"
import AboutBlog from '../../components/AboutBlog'
// Local
import NavigationBar from "../../components/NavigationBar"
import Footer from "../../components/Footer"

function Post({ mainImageUrl, title, excerpt, _updatedAt, slug }) {
  return (
    <Link href={`/blog/${slug.current}`} passHref>
      <div className="post">
        <div className="post-img">
          <Image src={mainImageUrl} alt={title} />
        </div>

        <Box className="post-details" >
          <div className="title">{title}</div>
          {/* <div className="excerpt">{excerpt}</div> */}
          <div className="published-at">
            {new Date(_updatedAt).toDateString().slice(4)}
          </div>
        </Box>
      </div>
    </Link>
  )
}

export default function Blog({ recentPosts }) {
  const [posts, setPosts] = useState(recentPosts)
  const [isLoading, setIsLoading] = useState(false)

  //TODO: sanity cors error, allow cors on sanity for domain and localhost:3000
  const fetchPosts = async () => {
    setIsLoading(true)
    const postCount = posts.length
    const perPage = 9

    try {
      const recentPosts = await client.fetch(
        `*[_type == 'post'] | order(_publishedAt desc)[${postCount}..${
          postCount + perPage
        }]{
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
            .width(360)
            .height(360)
            .auto("format")
            .url(),
        }
      })

      if (parsedRecentPosts?.length) {
        setPosts((val) => [...val, ...parsedRecentPosts])
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box bg="#fafafa" >
      <NavigationBar />
      <div className="respon">
      <AboutBlog/>
      <div className="post-list-container">
        <div className="container-ku">
        {posts.map((doc) => (
          <Post {...doc} key={doc.slug.current} />
        ))}
        </div>
      </div>

      <Flex justify={"center"}>
        <Button onClick={fetchPosts}>
          {isLoading ? "Loading..." : "Load More"}
        </Button>
      </Flex>
      <Footer/>
      </div>
    </Box>
  )
}

export async function getStaticProps() {
  const recentPosts = await client.fetch(
    `*[_type == 'post'] | order(_publishedAt desc)[0..8]{
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
        .width(360)
        .height(360)
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
