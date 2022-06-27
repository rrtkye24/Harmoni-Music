// client.js
import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
  projectId: "sl2lyhwp", //Replace this with your project ID
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2021-06-07",
})

const sanityImageBuilder = imageUrlBuilder(client)
const sanityImageUrl = (src) => sanityImageBuilder.image(src)

export { client, sanityImageUrl }
