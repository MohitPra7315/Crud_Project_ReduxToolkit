import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import { useActionData } from "react-router-dom"
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Updatedata } from "../App/Crudapp/UserdataSlice";
const Update = () => {



    const [libdata, setLibdata] = useState({
        name: "",
        phone: "",
        email: "",
        City: "",

    })

    console.log(libdata, "librayr single data aa gya h ")
    const { id } = useParams();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    // const { user, loading } = useSelector((state) => state.Crud)
    const { user, loading } = useSelector((state) => state.Crud)
    console.log(user, "edit part")

    const [editdata, setEditdata] = useState("")
    console.log(editdata)

    const single = ""

    useEffect(() => {
        if (id) {
            const single = user.filter((ele) => ele.id === id)
            setLibdata(single[0])
        }
    }, [])





    console.log(libdata)
    function submitHandler(event) {
        event.preventDefault();
        dispatch(Updatedata(libdata))

        Navigate("/Alldata")
        setLibdata({
            name: "",
            phone: "",
            email: "",
            City: "",

        })





    }
    function changeHandler(event) {
        setLibdata({ ...libdata, [event.target.name]: event.target.value })

    }
    return (
        <div>
            <form className="w-50 center m-auto" onSubmit={submitHandler}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">NAme</label>
                    <input type="text" className="form-control" value={libdata.name} name="name" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeHandler} />



                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">phone</label>
                    <input type="Number" className="form-control" name="phone" value={libdata.phone} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeHandler} />
                </div>

                <div className="mb-3">


                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" value={libdata.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeHandler} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">city</label>
                    <input type="text" className="form-control" name="City" value={libdata.City} id="exampleInputPassword1" onChange={changeHandler} />
                </div>
                {/* <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Join-date</label>
                <input type="date" className="form-control" name="date" value={libdata.date} id="exampleInputPassword1" onChange={changeHandler} />
            </div> */}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}
export default Update