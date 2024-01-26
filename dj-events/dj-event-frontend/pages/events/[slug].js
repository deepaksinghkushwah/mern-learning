import { useRouter } from "next/router";
import React from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/Event.module.css";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-toastify";
import { API_URL } from "@/config/index";
export default function EventPage({ evt }) {
  const router = useRouter();
  const deleteEvent = async (id) => {
    if (window.confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/events");
      }
    }
  };
  return (
    <Layout title={evt.name}>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.slug}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a
            href="#"
            onClick={() => deleteEvent(evt.slug)}
            className={styles.delete}
          >
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={960} height={600} alt={evt.name} />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>
      </div>
      <Link href="/events">
        <a className={styles.back}>Go Back </a>
      </Link>
    </Layout>
  );
}

/*export async function getStaticPaths(){
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  const paths = events.map(evt => ({
    params: {slug: evt.slug}
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({query: {slug}}){
  const res = await fetch(`${API_URL}/events/?slug=${slug}`);
  const events = await res.json();
  console.log(events);
  return {
    props: {
      event: events[0]
    },
    relvalidate: 1
  }
}*/

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events/${slug}`);
  const events = await res.json();
  //events.filter(item => item.slug === slug);
  console.log(events);
  return {
    props: {
      evt: events.item,
    },
  };
}
