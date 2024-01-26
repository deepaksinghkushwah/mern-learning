import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { faker } from "@faker-js/faker";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import {toast} from "react-toastify";
import moment from "moment";
import Image from "next/image";
import Modal from "@/components/Modal";
import { FaImage } from "react-icons/fa";
import ImageUpload from "@/components/ImageUpload";

export default function EventEditPage({evt}) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);  
  const [form, setForm] = useState({
    name: evt.name,
    slug: evt.slug,
    venue: evt.venue,
    address: evt.address,
    performers: evt.performers,
    event_date: evt.event_date,
    event_time: evt.event_time,
    description: evt.description,
    image: evt.image,
  });

  const [imagePreview, setImagePreview] = useState(evt.image ? evt.image : null);
  
  const imageUploaded = (e) => {
    console.log("Image uploaded");
    //get the latest image by request and set Image
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const saveData = async (postData) => {
      const res = await fetch(`${API_URL}/events/${evt.slug}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const data = await res.json();
      if (data) {
        //toast.success("Event updated");
        router.push(`/events/${form.slug}`);
      }
    };
    saveData(form);
  };
  return (
    <Layout title="Event Lists">
      <h1>Add New Event</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  placeholder="Event Name"
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="slug"
                  value={form.slug}
                  placeholder="Slug"
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="venue"
                  value={form.venue}
                  placeholder="Venue"
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="date"
                  id="event_date"
                  value={moment(form.event_date).format("yyyy-MM-DD")}
                  placeholder="Date"
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="time"
                  id="event_time"
                  value={form.event_time}
                  placeholder="Time"
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="description"
                  value={form.description}
                  placeholder="Description"
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="image"
                  value={form.image}
                  placeholder="Image"
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit" className="btn">
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <h2>Event Image</h2>
      {imagePreview && (
        <Image src={form.image} width={100} height={60} alt="Image"/>
      )}
      <div>
        <button onClick={() => setShowModal(true)} className="btn btn-icon">
          <FaImage/> Set Image
        </button>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload evtId={evt.id} imageUploaded={imageUploaded}/>
      </Modal>
    </Layout>
  );
}


export async function getServerSideProps({params: {slug}}){
    const res = await fetch(`${API_URL}/events/${slug}`);
    const evt = await res.json();        
    return {
        props: {
            evt: evt.item
        }
    }
}