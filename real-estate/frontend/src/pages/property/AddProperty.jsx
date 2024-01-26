import React from 'react'
import { useState } from 'react';
import { faker } from "@faker-js/faker";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useBaseStore, usePropertyStore } from '../../store/useStore';
import PropertyForm from './PropertyForm';
import shallow from 'zustand/shallow';
const AddProperty = () => {
    const navigate = useNavigate();
    const createProperty = usePropertyStore(state => state.createProperty);
    const setLoading = useBaseStore(state => state.setLoading, shallow);
    
    const [form, setForm] = useState({
        name: '',
        description: '',
        type: '',
        bhk: '',
        floors: '',
        plotSize: '',
        price: '',
        readyToMove: '',
        images: [],
    });
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
    });
    const [dealer, setDealer] = useState({
        name: '',
        contactNumber: '',
        email: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        form.address = address;
        form.dealer = dealer;      
        const images = [];
        for (let i = 0; i < faker.datatype.number({ min: 3, max: 20 }); i++) {
            let obj = { thumb: faker.image.business(200, 100, true), large: faker.image.business(800, 600, true) };
            images.push(obj);
        }
        form.images = images;  
        const call = async() => {
            const property = await createProperty(form);
            toast.success("Property Created");
            updateFormData();
            setLoading(false);
            navigate(`/property/update/${property?.slug}`);
        }
        call();
        
        
    }    

    const updateFormData = () => {
        setForm({
            name: faker.random.words(10),
            description: faker.lorem.paragraphs(3),
            type: faker.helpers.arrayElement(['rent', 'buy']),
            bhk: faker.datatype.number(1000),
            floors: faker.datatype.number(200),
            plotSize: faker.datatype.number(),
            price: faker.commerce.price(),
            readyToMove: faker.datatype.boolean(),
        });
        setAddress({
            street: faker.address.street(),
            city: faker.address.cityName(),
            state: faker.address.county(),
            zip: faker.address.zipCode()
        })

        setDealer({
            name: faker.name.fullName(),
            contactNumber: faker.phone.number(),
            email: faker.internet.email(),
        })
    }

    return (
        <div>
            <h1>Add Property</h1>
            <button type="button" onClick={() => updateFormData()} className="btn btn-primary mb-3">Populate Form</button>
            <p className='text-secondary'><span className='text-danger'>*</span>Images will be added randomly for now</p>
            <PropertyForm 
            dealer={dealer} 
            setDealer = {setDealer}
            address={address} 
            setAddress={setAddress}
            form={form}
            setForm={setForm}
            handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default AddProperty