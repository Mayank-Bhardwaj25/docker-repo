import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllStudents } from "../redux/StudentActions";

export  function StudentList() {

    const dispatch = useDispatch();
    const students = useSelector((state)=> state.students)
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    useEffect(()=> {
        dispatch(getAllStudents())
    },[dispatch])


    if(loading){
            return <h3>Loading...</h3>
        }
        if(error) {
            return <h3>(error)</h3>
        }
    return(
        <>
        <h1>Student List</h1>
        {students.length===0 ? <h3>No students</h3>:
        (
            <ul>
                {students.map((s) => 
                
                <li key={s.id}>
                    {s.sname}---{s.course}---<Link to={`/students/${s.id}`}>Info</Link>
                     
                </li>
                )}

                 
            </ul>
        )}
        <Link to={'/'}>Back</Link>
        
        </>
    )
} 