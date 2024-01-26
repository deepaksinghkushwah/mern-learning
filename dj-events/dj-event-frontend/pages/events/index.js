import Link from "next/link"
import Layout from '@/components/Layout'
import { API_URL } from "@/config/index";
import { PER_PAGE_LIMIT } from "@/config/index";
import EventItem from "@/components/EventItem";
import Pagination from "@/components/Pagination";
export default function EventsPage({events, page, total}) {
  return (
    <Layout title="Home" keywords="Home page">
      <h1>All Events</h1>
      {events.length === 0 && <h3>No events</h3>}
      
        {events.length > 0 && events.map((item) => (
          <EventItem evt={item} key={item._id}/>          
        ))}
       <Pagination page={page} total={total}/>
    </Layout>
  )
}


export async function getServerSideProps({query: {page=1}}) {
  // calculate start page
  
  const totalRes = await fetch(`${API_URL}/events`);
  const totalResData = await totalRes.json();
  const total = totalResData.items.totalDocs || null;

  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE_LIMIT;
  // fetch events 
  const d = await fetch(`${API_URL}/events?sort=id&order=desc&page=${page}&limit=${PER_PAGE_LIMIT}&start=${start}`);
  const data = await d.json();  
  return {
    props: {
      events: data.items.docs,      
      page: +page,
      total
    }    
  };
}