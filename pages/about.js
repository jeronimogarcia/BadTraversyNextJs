import Link from "next/link";   
import Layout from "@/components/layouts/Layout"; 

const AboutPage = () => {
  return (
    <Layout title='About DJ Events'>
        <h1>About</h1>
        <p>This is an app to find the last event</p>
        <p>Version 1.0.0</p>
        <Link href='/' passHref>HomePage</Link>
    </Layout>
  )
}

export default AboutPage
