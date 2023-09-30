
import React, { useEffect, useState } from "react"
import { searchUser } from "../App/Crudapp/UserdataSlice";

import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const dispatch = useDispatch()
    const [searchdata, setSearchdata] = useState("")
    console.log(searchdata)

    useEffect(() => {
        dispatch(searchUser(searchdata))
    }, [])


    const usercount = useSelector(state => state.Crud)
    // console.log("data count", usercount.user.length)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: "70px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">RTK</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mr-2 mb-lg-0" style={{ display: "flex", gap: "15px" }}>

                            <NavLink to="/" className=" non-underline-link nav-link " state={{ textDecoration: "none" }} >
                                Create
                                {/* <h4 className="" state={{ text: "20px", TextDecoder: "none", textDecoration: "none" }} >Create</h4> */}
                            </NavLink>
                            <div className="" style={{ position: "relative" }}>

                                <NavLink to="/Alldata" className="nav-link" state={{ textDecoration: "none" }}>
                                    AllPost
                                    {/* <h4 className=" " style={{ textDecoration: "none" }}  > Post</h4> */}

                                </NavLink>
                                <p className="non-underline-link" style={{ position: "absolute", background: "green", borderRadius: "50%", padding: "1px 7px", color: "white", font: "semibold", top: "-5px", right: "-10px", }}>{usercount.user.length}</p>
                            </div>
                        </div>
                        <form className="d-flex " role="search">
                            <input className="form-control " type="search" placeholder="Search" aria-label="Search"
                                onChange={(e) => setSearchdata(e.target.value)}
                            />
                            <button className="btn btn-outNavlink-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar