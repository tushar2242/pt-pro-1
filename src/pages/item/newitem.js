import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Siderbar from '../siderbar';

const NewItem = () => {
    const [formData, setFormData] = useState({
        username: '',
        unitOfMeasure: 'Unit',
        itemGroup: 'Product',
        rememberMe: false, // New state variable for the checkbox
    });

    const route = useRouter();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        // Your login logic here

        // Access the form data
        console.log('Form Data:', formData);
    };

    return (
        <>
       <Siderbar/>
        <div>
            {/* <h2>Items</h2> */}
            <div className="col-lg-6 itemOuter mt-3">
                <h4 className="text-center"></h4>
                <div className="rown" style={{ overflow: 'hidden' }}>
                    <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="pt pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">Add New Item Here</h5>
                                </div>
                                <form onSubmit={handleAddItem} method="post" className="row g-3 needs-validation">
                                    <div className="col-12">
                                        <label htmlFor="yourUsername" className="form-label">Item name</label>
                                        <div className="has-validation">
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                id="yourUsername"
                                                required
                                                value={formData.username}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">Please enter your username.</div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <label htmlFor="itemGroup" className="form-label">Item Group</label>
                                        <input
                                            type="text"
                                            name="itemGroup"
                                            className="form-control"
                                            id="itemGroup"
                                            required
                                            value={formData.itemGroup}
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">Please enter the item group.</div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <label htmlFor="unitOfMeasure" className="form-label">Default Unit of Measure</label>
                                        <input
                                            type="text"
                                            name="unitOfMeasure"
                                            className="form-control"
                                            id="unitOfMeasure"
                                            required
                                            value={formData.unitOfMeasure}
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">Please enter the unit of measure.</div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <div className="form-check ms-1">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="rememberMe"
                                                checked={formData.rememberMe}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Maintain Stock
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <button className="btn btn-primary login-btn" type="submit">Add New Item</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default NewItem;
