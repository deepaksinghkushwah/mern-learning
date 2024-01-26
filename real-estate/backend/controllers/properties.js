import { PaginationParameters } from "mongoose-paginate-v2";
import Property from "../models/properties.js";
import propertyValidation from "../validations/property.js";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";

/*export const getAll = async (req, res) => {
  res.status(200).json(res.advancedResults);
};*/

export const getAll = async (req, res) => {  
  //console.log(req.query);
  const perPage = parseInt(req.query.limit) || 10;
  const currentPage = parseInt(req.query.page) || 1;

  const query = {};
  if (req.query.term !== undefined) {
    query["name"] = {'$regex': `${req.query.term}`};
    //console.log(req.query.term);
  }

  const totalRows = await Property.countDocuments(query);
  const rows = await Property.find(query)
    .skip((currentPage - 1) * perPage)
    .sort({ name: 1 })
    .limit(perPage);

  const numberOfPages = Math.ceil(totalRows / perPage);
  let nextPage = 0;
  let prevPage = 0;
  if (currentPage < numberOfPages) {
    nextPage = currentPage + 1;
  } else {
    nextPage = null;
  }

  if (currentPage > 1) {
    prevPage = currentPage - 1;
  } else {
    prevPage = null;
  }

  const pagination = {
    totalRows: totalRows,
    totalPages: numberOfPages,
    prevPage,
    currentPage,
    nextPage,
  };

  res.json({ data: rows, pagination });
};

export const create = async (req, res) => {
  const item = req.body;
  // validate data
  const validation = null;
  try {
    await propertyValidation(item);
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }

  try {
    const model = new Property(item);
    await model.save();
    res.json({ message: "Property added", success: true, property: model });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getWithSlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const item = await Property.findOne({ slug: slug });
    return res.send({ item, success: true });
  } catch (error) {
    return res.status(404).json({
      error: "Property not found",
    });
  }
};

export const getWithId = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Property.findOne({ id: id });
    return res.send({ item, success: true });
  } catch (error) {
    return res.status(404).json({
      error: "Property not found",
    });
  }
};

export const deleteWithId = async (req, res) => {
  const { slug } = req.params;
  await Property.findOneAndDelete({ slug: slug });
  res.send({ message: `Property removed with slug ${slug}`, success: true });
};

export const updateWithId = async (req, res) => {
  const { slug } = req.params;
  const { name, description, address, dealer, type, bhk, floors, plotSize, price, readyToMove } = req.body;
  const item = await Property.findOne({ slug: slug });
  if (item) {
    if (name) item.name = name;
    if (description) item.description = description;
    if (dealer) item.dealer = dealer;
    if (address) item.address = address;
    if (type) item.type = type;

    if (bhk) item.bhk = bhk;
    if (floors) item.floors = floors;
    if (plotSize) item.plotSize = plotSize;
    if (price) item.price = price;
    if (readyToMove) item.readyToMove = readyToMove;
    
    //if (updated_at) item.event_date = updated_at;
    //if (updated_by) item.event_time = updated_by;

    await item.save();
    res.send({ message: `Property updated with slug ${slug}`, success: true, property: item });
  } else {
    res.send({ error: "Property not found", success: false });
  }
};

export const populate = async (req, res) => {
  const propertyType = ["buy", "rent"];
  for (let i = 1; i < 300; i++) {
    let item = new Property({
      name: faker.company.companyName(),
      description: faker.lorem.paragraphs(10),
      
      type: propertyType[Math.floor(Math.random() * propertyType.length)],
      address: {
        street: faker.address.buildingNumber()+", "+faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.county(),
        zip: faker.address.zipCode(),
      },
      bhk: faker.random.numeric(1),
      floors: faker.random.numeric(1),
      plotSize: faker.commerce.price(50, 10000),
      price: faker.commerce.price(100, 1000000, 2),
      dealer: {
        name: faker.name.firstName() + " "+ faker.name.lastName(),
        contactNumber: faker.phone.number(),
        email: faker.internet.email()
      },
      readyToMove: faker.datatype.boolean(),


      created_at: faker.date.past(1),
      created_by: "62d641c8e5fe9e1f35fb1b5b",
      
    });
    const num = faker.commerce.price(3,20);
    for (let i = 0; i < num; i++) {
      item.images.push({thumb: faker.image.business(200, 100, true), large: faker.image.business(800, 600, true)});  
    }
    
    try {
      await item.save();
    } catch (error) {
      return res.json({ error: error.message });
    }
  }
  res.send({ msg: "Property table populated" });
};
