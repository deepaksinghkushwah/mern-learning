import React from 'react'

const PropertyForm = ({ form, setForm, dealer, setDealer, address, setAddress, handleSubmit }) => {
    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }
    const handleAddressChange = (e) => {
        setAddress((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handleDealerChange = (e) => {
        setDealer((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handlePropertyType = (e) => {
        setForm((prev) => ({
            ...prev,
            type: e.target.value,
        }))
    }
    const handleReadyToMoveChange = (e) => {        
        setForm(prev => ({  
            ...prev,          
            readyToMove: e.target.value,
        }));
        console.log(form.readyToMove);
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <table className="table table-striped table-hover">
                    <tbody>
                        <tr>
                            <th width="15%">Name</th>
                            <td width="35%"><input className='form-control' type="text" name="name" value={form.name} onChange={(e) => handleChange(e)} /></td>
                            <th width="15%">Type</th>
                            <td width="35%">
                                <input type="radio" name="type" value="buy" checked={form.type === 'buy'} onChange={(e) => handlePropertyType(e)} /> Buy&nbsp;
                                <input type="radio" name="type" value="rent" checked={form.type === 'rent'} onChange={(e) => handlePropertyType(e)} /> Rent
                            </td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>
                                <textarea className='form-control' rows="5" name="description" value={form.description} onChange={(e) => handleChange(e)}></textarea>
                            </td>
                            <th>Address</th>
                            <td>
                                <input type="text" className='form-control' name="street" placeholder='Street' value={address.street} onChange={(e) => handleAddressChange(e)} />
                                <input type="text" className='form-control' name="city" placeholder='City' value={address.city} onChange={(e) => handleAddressChange(e)} />
                                <input type="text" className='form-control' name="state" placeholder='State' value={address.state} onChange={(e) => handleAddressChange(e)} />
                                <input type="text" className='form-control' name="zip" placeholder='Postcode/Zip' value={address.zip} onChange={(e) => handleAddressChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <th>Rooms</th>
                            <td><input type="number" className='form-control' name="bhk" value={form.bhk} onChange={(e) => handleChange(e)} /></td>
                            <th>Floors</th>
                            <td><input type="number" className='form-control' name="floors" value={form.floors} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <th>Plot Size</th>
                            <td><input type="number" className='form-control' name="plotSize" value={form.plotSize} onChange={(e) => handleChange(e)} /></td>
                            <th>Price</th>
                            <td><input type="number" className='form-control' name="price" value={form.price} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <th>Dealer</th>
                            <td>
                                <input type="text" className='form-control' name="name" placeholder='Name' value={dealer.name} onChange={(e) => handleDealerChange(e)} />
                                <input type="text" className='form-control' name="contactNumber" placeholder='Contact' value={dealer.contactNumber} onChange={(e) => handleDealerChange(e)} />
                                <input type="text" className='form-control' name="email" placeholder='Email' value={dealer.email} onChange={(e) => handleDealerChange(e)} />
                            </td>
                            <th>Ready to Move</th>
                            <td>
                                <select value={form.readyToMove} name="readyToMove" onChange={(e) => handleReadyToMoveChange(e)}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                                
                            </td>
                        </tr>
                    </tbody>

                </table>
                <button type="submit" className='btn btn-primary'>Save Property</button>
            </form>
        </div>
    )
}

export default PropertyForm