import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Siderbar from '../../helpers/siderbar';
import axios from 'axios';

const NewCustomer = () => {
    const [customerData, setCustomerData] = useState({
        customerName: '',
        customerGroup: 'Retail',
        customerType: 'Regular',
        defaultPrice: "All Territory",
        maintainStock: false, // New state variable for the checkbox
    });

    const route = useRouter();

    const handleCustomerDataChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCustomerData({
            ...customerData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleAddCustomer = async (e) => {
        e.preventDefault()

        // User is authenticated, proceed to add the item
        const apiUrl = 'https://tgc67.online/api/resource/Item';

        const requestData = {
            data: {
                customer_name: customerData.customerName,
                customer_type: customerData.customerType,
                customer_group: customerData.customerGroup,
                territory: customerData.defaultPrice,
                maintain_stock: customerData.maintainStock ?0:1,
            },
        };
    try {
        const response = await axios.post(apiUrl, requestData, {
            headers: {
                'Authorization': 'token adbb1c103b6991c:d3f13587a64bc25'
            }
        })

        if (response.statusText === 'OK') {
            alert("Item Added Successfully")
            route.push('/main')
        }
        // console.log('API Response:', response.statusText)
    } catch (error) {
        // Handle any errors that occur during the request
        alert("Please Try Again")
        console.error('API Error:', error);
    }

};

return (
    <>
        <Siderbar />
        <div>
            <div className="col-lg-6 itemOuter mt-3">
                <h4 className="text-center"></h4>
                <div className="rown" style={{ overflow: 'hidden' }}>
                    <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
                        <div className="card mb-3" style={{ position: "relative" }}>
                            <div className="card-body">
                                <div className="pt pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4"> New Customer </h5>
                                </div>
                                <div className='' style={{ position: 'absolute', right: '20px', top: '20px' }} onClick={() => {
                                    route.push('/main')
                                }}>
                                    <div className="btn btn-primary iconOuter cancelIcon"  >
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                </div>

                                <form onSubmit={handleAddCustomer} method="post" className="row g-3 needs-validation">
                                    <div className="col-12">
                                        <label htmlFor="customerName" className="form-label">Customer Name</label>
                                        <div className="has-validation">
                                            <input
                                                type="text"
                                                name="customerName"
                                                className="form-control"
                                                id="customerName"
                                                required
                                                value={customerData.customerName}
                                                onChange={handleCustomerDataChange}
                                            />
                                            <div className="invalid-feedback">Please enter the customer name.</div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <label htmlFor="customerGroup" className="form-label">Customer Group</label>
                                        <input
                                            type="text"
                                            name="customerGroup"
                                            className="form-control"
                                            id="customerGroup"
                                            required
                                            value={customerData.customerGroup}
                                            onChange={handleCustomerDataChange}
                                        />
                                        <div className="invalid-feedback">Please enter the customer group.</div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <label htmlFor="customerType" className="form-label">Customer Type</label>
                                        <input
                                            type="text"
                                            name="customerType"
                                            className="form-control"
                                            id="customerType"
                                            required
                                            value={customerData.customerType}
                                            onChange={handleCustomerDataChange}
                                        />
                                        <div className="invalid-feedback">Please enter the customer type.</div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <label htmlFor="defaultPrice" className="form-label">Territory</label>
                                        <input
                                            type="text"
                                            name="defaultPrice"
                                            className="form-control"
                                            id="defaultPrice"
                                            required
                                            value={customerData.defaultPrice}
                                            onChange={handleCustomerDataChange}
                                        />
                                        <div className="invalid-feedback">Please enter the default price.</div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <div className="form-check ms-1">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="maintainStock"
                                                checked={customerData.maintainStock}
                                                onChange={handleCustomerDataChange}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="maintainStock">
                                                Maintain Stock
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <button className="btn btn-primary login-btn" type="submit">Add New Customer</button>
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

export default NewCustomer;



