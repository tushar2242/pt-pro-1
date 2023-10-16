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
                    <div className="container-fluid p-2">

                        <div className="btn btn-primary iconOuter" onClick={ToggleSidebar}  >
                            <i class="gg-menu"></i>
                        </div>

                        <a className="navbar-brand text-primary mr-0"><i class="gg-profile" onClick={() => { setProfile(!openProfile) }}></i></a>
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
                            <li><a className="sd-link">Menu Item 1</a></li>
                            <li><a className="sd-link">Menu Item 2</a></li>
                            <li><a className="sd-link">Menu Item 3</a></li>
                            <li><a className="sd-link">Menu Item 4</a></li>
                            <li><a className="sd-link">Menu Item 5</a></li>
                            <li><a className="sd-link">Menu Item 6</a></li>
                            <li><a className="sd-link">Menu Item 7</a></li>
                            <li><a className="sd-link">Menu Item 8</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>

        </>
    )
}

export default Main