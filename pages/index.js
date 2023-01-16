import Layout from "@/components/layouts/Layout";
import { API_URL } from "@/config/index";

export default function HomePage({events}) {
  return (
    <Layout>
      <h1>HomePage</h1>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return{
    props: {events},
    revalidate: 10
  }
}
