import React, { useState } from "react";


const Main = () => {
    const [isOpen, setIsopen] = useState(false);
    const [openProfile, setProfile] = useState(false)

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className="container-fluid mt-3">

                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2 header">

                        <div className="btn btn-primary iconOuter" onClick={ToggleSidebar}  >
                            <i class="gg-menu"></i>
                        </div>

                        <a className="navbar-brand text-primary mr-0"><i class="gg-profile" onClick={() => { setProfile(!openProfile) }} style={{ cursor: "pointer" }}></i></a>
                        {openProfile &&
                            <div className="more-profile">
                                <li>More Info </li>
                                <li>Login</li>
                            </div>
                        }

                    </div>
                </nav>
                <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0">Sidebar Header</h4>
                        <div className="btn btn-primary iconOuter" onClick={ToggleSidebar}><i class="gg-move-left"></i></div>
                    </div>
                    <div className="sd-body">
                        <ul>
                            <DropLi
                                nav='NavItem 1'
                                navItems={[
                                    "Item 1",
                                    "item 2",
                                    "item 3"
                                ]}
                            />
                            <li className="sd-link" >Item 2</li>
                            <li className="sd-link" >Item 3</li>
                            <li className="sd-link" >Item 4</li>
                            <li className="sd-link" >Item 5</li>

                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>

            <div className="container card-container">
                <ItemCard/>
                <ItemCard/>

                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </div>
        </>
    )
}

export default Main



const DropLi = ({ nav, navItems }) => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <>

            <li onClick={() => setIsNavOpen(!isNavOpen)} className="sd-link">{nav}</li>
            {
                isNavOpen && navItems.length > 0 && navItems.map((item, i) => {
                    return (
                        <div key={i} className="navbarLi">

                            <li className="sd-link" style={{ paddingLeft: '30px' }}>{item}</li>
                        </div>
                    )
                })
            }


        </>
    )
}



const ItemCard = () => {
    return (
        <>
            <div class="product-card">
                <div class="product-img img-three"></div>
                <div class="product-text">
                    <h3>Madrid</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum. Non maxime corrupti illo necessitatibus error vitae numquam perspiciatis culpa.</p>
                </div>
                <div class="product-cart">
                    <button type="submit">Add to cart</button>
                </div>
            </div>
        </>
    )
}