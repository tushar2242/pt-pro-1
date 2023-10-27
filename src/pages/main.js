import React, { useEffect, useState } from "react";
import Siderbar from "../helpers/siderbar";


const Main = () => {

    return (
        <>
            <Siderbar />
            <div className="card-container">
                <ItemCard />
                <ItemCard />

                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
            {/* <ContextMenu /> */}
        </>
    )
}

export default Main




const ItemCard = () => {
    return (
        <>
            <div className="product-card">

                <div className="product-text">
                    <h6>Loan From Supplier</h6>
                    <p>$400</p>

                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum. Non maxime corrupti illo necessitatibus error vitae numquam perspiciatis culpa.</p> */}
                </div>
                {/* <div className="product-cart">
                    <button type="submit">Add to cart</button>
                </div> */}
            </div>
        </>
    )
}
