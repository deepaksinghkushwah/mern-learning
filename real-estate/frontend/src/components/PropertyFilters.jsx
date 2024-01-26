import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import axiosHTTP from '../store/axiosHTTP';
import { usePropertyStore } from '../store/useStore';

const PropertyFilters = () => {

    const inputRef = useRef("");

    const properties = usePropertyStore(state => state.properties);
    const resetSearch = usePropertyStore(state => state.resetSearch);
    const searchTerm = usePropertyStore(state => state.searchTerm);
    const setSearchTerm = usePropertyStore(state => state.setSearchTerm);

    const getAllProperties = usePropertyStore(state => state.getAllProperties);

    const navigate = useNavigate();

    const updatePtype = () => { }
    const search = () => {
        if (searchTerm.length >= 3 && searchTerm !== null) {
            getAllProperties(1);
        }
    }

    const handleResetSearch = () => {
        inputRef.current.value = "";
        resetSearch();
    }


    return (
        <div className='ml-3'>
            <form method="post">
                <input className='form-control' type="text" ref={inputRef} value={searchTerm} id="name" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by names" />
                <br />
                <button type="button" onClick={() => search()} className="btn btn-sm btn-primary">Filter Result</button>&nbsp;
                <button type='button' className='btn btn-sm btn-primary' onClick={() => handleResetSearch()}>Reset</button>&nbsp;
            </form>

        </div>
    )
}

export default PropertyFilters