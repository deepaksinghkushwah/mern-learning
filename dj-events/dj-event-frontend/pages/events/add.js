import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { faker } from "@faker-js/faker";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import {toast} from "react-toastify";
import  moment from "moment";
export default function EventAddPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    slug: "",
    venue: "",
    address: "",
    performers: "",
    event_date: "",
    event_time: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    populateData();
  }, []);

  const populateData = () => {
    let name = faker.random.words(5);
    setForm({
      name: name,
      slug: faker.helpers.slugify(name.toLowerCase()),
      venue: faker.address.streetAddress(),
      address: faker.address.street(),
      performers: faker.random.words(5),
      event_date: faker.date.recent(),
      event_time: faker.datatype.number({min: 1,max: 24})+":"+faker.datatype.number({min: 1,max: 59}) +" AM GMT",
      description: faker.lorem.paragraph(3),
      image: faker.image.imageUrl(600, 400, "cat", true),
    });
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
      const res = await fetch(`${API_URL}/events`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const data = await res.json();
      if (data) {
        toast.success("Event added, now refreshing form data");
        populateData();
        //router.push("/events");
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
                  value={moment(form.event_date).format('yyyy-MM-DD')}
                  placeholder="Date"
                  onChange={(e) => handleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
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
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Layout>
  );
}
