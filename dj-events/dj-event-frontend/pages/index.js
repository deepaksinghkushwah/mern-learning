import Link from "next/link"
import Layout from '@/components/Layout'
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
export default function Home({events}) {
  return (
    <Layout title="Home" keywords="Home page">      
      <h1>Upcoming Events</h1>      
      {events.length === 0 && <h3>No events</h3>}
      
        {events?.map((item) => (
          <EventItem evt={item} key={item._id}/>
          
        ))}
      
    </Layout>
  )
}


export async function getServerSideProps(context) {
  const d = await fetch(`${API_URL}/events?sort=id&order=desc&limit=3`);
  const data = await d.json();    
  return {
    props: {
      events: data.items.docs,
      revalidate: 1
    }    
  };
}