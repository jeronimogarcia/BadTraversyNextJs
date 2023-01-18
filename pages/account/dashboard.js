import Layout from "@/components/layouts/Layout";
import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers";

const DashboardPage = ({events}) => {
  console.log(events)
  return (
    <Layout title="User Dashboard">
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default DashboardPage;

export async function getServerSideProps ({req}) {
  const {token} = parseCookies(req)

  const res = await fetch (`${API_URL}/events/me`, {
    metjod: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const events = await res.json()

  return {
    props: {events}
  }
}
