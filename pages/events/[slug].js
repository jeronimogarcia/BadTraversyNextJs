import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();

  return (  
    <div>
      <h1>EventPage</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}></button>
    </div>
  );
};

export default EventPage;
