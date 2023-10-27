import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Siderbar = ({ children }) => {


    const [isOpen, setIsopen] = useState(false);
    const [openProfile, setProfile] = useState(false)

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const route = useRouter()

    const handleRoutePage = (link) => {
        route.push(link)
    }

    return (
        <>


            <div>
                <div className=" mt-3">

                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2 header">

                            <div className="btn btn-primary iconOuter" onClick={ToggleSidebar}  >
                                <i className="fa-solid fa-bars"></i>

                            </div>

                            <a className="navbar-brand-user text-primary mr-0">
                            <button className="btn btn-primary login-btn" type="submit" onClick={()=>{
                                route.push('/main')
                            }}>Home</button>

                            </a>
                           

                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Master</h4>
                            <div className="btn btn-primary iconOuter" onClick={ToggleSidebar}><i className="fa-solid fa-right-to-bracket fa-rotate-180"></i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                {/* <DropLi
                                    nav='NavItem 1'
                                    navItems={[
                                        "Item 1",
                                        "item 2",
                                        "item 3"
                                    ]}
                                /> */}
                                <li className="sd-link" onClick={() => handleRoutePage('/item')}>Item List</li>
                                <li className="sd-link" onClick={() => handleRoutePage('/supplier')}>Supplier List</li>
                                <li className="sd-link" onClick={() => handleRoutePage('/customer')}>Customer List</li>


                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
                </div>
                {children}

            </div>
            {/* <ContextMenu /> */}
        </>
    );
}

export default Siderbar;



const DropLi = ({ nav, navItems }) => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <>

            <li onClick={() => setIsNavOpen(!isNavOpen)} className="sd-link">{nav}
                {isNavOpen ? <i className="fa-solid fa-sort-up"></i> : <i className="fa-solid fa-sort-down"></i>}
            </li>
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


const ContextMenu = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpened(!isMenuOpened);
    };

    const route = useRouter()

    const handleRoutePage = (link) => {
        route.push(link)
    }


    return (
        <>
            <div className="menuOuter">
                <div className="more-menu" onClick={toggleMenu} style={isMenuOpened ? {transform:'rotate(45deg)'} : []}>
                   {<i class="fa-solid fa-circle-plus"></i>}
                </div>

                {isMenuOpened && <nav className="more-options">
                    <section>
                        <li onClick={() => handleRoutePage('/customer/new-customer')}>Create a New Customer</li>

                        <li onClick={() => handleRoutePage('/item/newitem')}>Create New Item</li>
                        {/* <li>Create a New Customer</li>   */}
                        <li onClick={() => handleRoutePage('/supplier/newsupplier')}>Create a New Supplier</li>
                        <li>Create Purchase Invoice</li>
                        <li>Create New Return</li>
                        <li>All Purchase Invoice</li>
                        <li>All Sales Invoices</li>
                    </section>

                </nav>
                }

                {/* <div onClick={handleMenuClicked} className="contextMenu" /> */}


            </div >
        </>
    );
};


export {ContextMenu}