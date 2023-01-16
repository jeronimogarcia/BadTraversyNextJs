import Link from "next/link";
import Layout from "@/components/layouts/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>HomePage</h1>
      <Link passHref href='/about'>About</Link>
    </Layout>
  )
}
