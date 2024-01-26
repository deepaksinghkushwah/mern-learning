import Link from "next/link"
import Layout from '@/components/Layout'
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import { useRouter } from "next/router";
export default function SearchPage({events}) {
    const router = useRouter();
  return (
    <Layout title="Search" keywords="Home page">
        <Link href="/events">Go Back</Link>
      <h1>Search events for {router.query.term}</h1>
      
      {events.length === 0 && <h3>No events</h3>}
      
        {events?.map((item) => (
          <EventItem evt={item} key={item._id}/>
          
        ))}
      
    </Layout>
  )
}


export async function getServerSideProps({query: {term}}) {    
  const d = await fetch(`${API_URL}/events?q=${term}`);
  const data = await d.json();  
  return {
    props: {
      events: data.items.docs,      
    }    
  };
}