import { Link } from "react-router-dom";

export function Home() {
    return(
        <div className="container-fluid">
            <div className="row bg-primary text-light">
                <h1>Student Management App</h1> 

            </div>
            <div className="row">
                <Link to="/students" className="btn btn-warning">View Students</Link>
                <br></br>
                <Link to="/add" className="btn btn-success">Add Students</Link>

            </div>

        </div>
    )
}