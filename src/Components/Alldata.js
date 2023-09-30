
import { useEffect } from "react";
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import { Readdata } from "../App/Crudapp/UserdataSlice";
import { Deletedata } from "../App/Crudapp/UserdataSlice";

const Alldata = () => {
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.Crud)
    console.log("read dat from store", user)
    console.log(loading)

    useEffect(() => {
        dispatch(Readdata())
    }, [])
    function UpdateHandler(event) {



    }



    return (
        <div className="border my-5">
            <Link to="/">
                <button className="bg-success text-white border rounded py-2 px-4">create</button>
            </Link>
            <div className="" style={{ background: "whitesmoke" }}></div>

            {
                loading ? <div>Loading....</div> :
                    user.map((ele,index) => (
                        <div className=" text-center "  style={{ background: "whitesmoke", width: "100%", padding: "10px 40px", margin: "0px auto" }}>
                            <div key={ele.id} className="row align-items-start     " style={{ padding: "20px 20px", background: "whitesmoke", width: "100%", borderBottom: "2px solid black", display: "flex", justifyContent: "center", gap: "2px", alignItems: "center" }}>

                                <div className="col-1" style={{ width: "50px", padding: "5px 0px", fontWeight: "semibold" }}>
                                    {/* {ele.id} */}
                                </div>
                                <div className="col " style={{ padding: "10px 10px", height: "50px" }}>

                                    {ele.name}
                                </div>
                                <div className="col " style={{ padding: "10px 0px", height: "50px" }}>
                                    {ele.phone}
                                </div>
                                <div className="col " style={{ padding: "10px 0px", height: "50px" }}>
                                    {ele.email}
                                </div>
                                <div className="col " style={{ padding: "10px 10px", height: "50px" }}>

                                    {ele.city}
                                </div>
                                <div className="col mr-2">
                                    <Link to={`/edit/${ele.id}`} className="btn  text-primary  px-4 mx-2  "> <button className="bg-primary px-4 mx-2  rounded border " style={{ color: "white" }} >edit
                                    </button></Link>
                                    <button onClick={() => dispatch(Deletedata(ele.id))} className="bg-danger px-4 mx-2 text-white rounded border ">Delete</button>

                                </div>

                            </div>
                        </div>
                    ))

            }

        </div>
    )
}

export default Alldata;