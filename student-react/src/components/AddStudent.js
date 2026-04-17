import { useDispatch, useSelector } from "react-redux"
import { addStudent } from "../redux/StudentActions";
import { useState } from "react";
import { Link } from "react-router-dom";

export  function AddStudent() {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const[student, setStudent] = useState({
        sname:"",
        course:""
    })


    const handleChange = (e)=>{
        setStudent({
            ...student, 
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit =(e) => {

        e.preventDefault()
        dispatch(addStudent(student))
        setStudent({sname:"", course:""})
    }
    return (
       <div>
            <h1>StudentForm</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="sname" value={student.sname}
                        onChange={handleChange}
                    >
                    </input>

                    
                </div>


                 <div>
                    <label>Course:</label>
                    <input type="text" name="course" value={student.course}
                        onChange={handleChange}
                    >
                    </input>
                </div>

                <br>
                </br>

                <button className="btn btn-primary">Add Student</button>
            </form>

            {loading && <h3>Loading...</h3>}
            {error && <h3>Error...</h3>}

             <Link className="btn btn-success" to={'/'}>Student List</Link>

       </div> 
    )
}