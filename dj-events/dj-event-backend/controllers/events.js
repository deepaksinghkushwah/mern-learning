import { PaginationParameters } from "mongoose-paginate-v2";
import Event from "../models/events.js";
import eventValidation from "../validations/event.js";

export const getEvents = async (req, res) => {
  const items = await Event.paginate(...new PaginationParameters(req).get());  
  res.json({ items, success: true });
};

export const createEvent = async (req, res) => {
  const item = req.body;
  // validate data
  const validation = null;
  try {
    await eventValidation(item);
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }

  try {
    const model = new Event(item);
    await model.save();
    res.json({ message: "Event added", success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEventWithSlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const item = await Event.findOne({ slug: slug });
    return res.send({ item, success: true });
  } catch (error) {
    return res.status(404).json({
      error: "Event not found",
    });
  }
};

export const getEventWithId = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findOne({ id: id });
    return res.send({ event, success: true });
  } catch (error) {
    return res.status(404).json({
      error: "Event not found",
    });
  }
};

export const deleteEventWithId = async (req, res) => {
  const { slug } = req.params;
  await Event.findOneAndDelete({ slug: slug });
  res.send({ message: `Event removed with slug ${slug}`, success: true });
};

export const updateEventWithId = async (req, res) => {
  const { slug } = req.params;
  const {
    name,
    description,
    address,
    venue,
    performers,
    event_date,
    event_time,
    image,
  } = req.body;
  const event = await Event.findOne({ slug: slug });
  if (event) {
    if (name) event.name = name;

    if (description) event.description = description;

    if (address) event.address = address;

    if (venue) event.venue = venue;

    if (performers) event.performers = performers;

    if (event_date) event.event_date = event_date;

    if (event_time) event.event_time = event_time;

    if (image) event.image = image;

    await event.save();

    res.send({ message: `Event updated with slug ${slug}`, success: true });
  } else {
    res.send({ error: "Event not found", success: false });
  }
};
