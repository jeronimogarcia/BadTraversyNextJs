import { useRouter } from "next/router";
import Layout from "@/components/layouts/Layout"

const EventPage = () => {
  const router = useRouter();

  return (  
    <Layout>
      <h1>My Events</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}></button>
    </Layout>
  );
};

export default EventPage;
