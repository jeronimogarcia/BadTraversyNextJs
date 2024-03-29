import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router'
import Layout from "@/components/layouts/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

const EventPage = ({ evt }) => {
  const router = useRouter()

  // const deleteEvent = async (e) => {
  //   if (confirm("Are you sure?")) {
  //     const res = await fetch(`${API_URL}/events/${evt.id}`, {
  //       method: "DELETE",
  //     });

  //     const data = await res.json()

  //     if(!res.ok){
  //       toast.error(data.message)
  //     }else{
  //       router.push('/events')
  //     }
  //   }
  // };

  return (
    <Layout>
      <div className={styles.event}>
        {/* <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <FaPencilAlt>Edit Event</FaPencilAlt>
          </Link>

          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes>Delete Event</FaTimes>
          </a>
        </div> */}

        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>

        <h1>{evt.name}</h1>
        <ToastContainer />

        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.formats.medium.url}
              alt={evt.name}
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events" className={styles.back}>
          {"<"} Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default EventPage;

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`);

//   const events = await res.json();

//   const paths = events.map((evt) => ({ params: { slug: evt.slug } }));

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`);

//   const events = await res.json();

//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);

  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
