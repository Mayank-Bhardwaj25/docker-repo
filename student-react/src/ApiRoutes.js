
import { AddStudent } from "./components/AddStudent";
import { StudentDetail } from "./components/StudentDetail";
import { StudentList } from "./components/StudentList";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";

export function ApiRoutes() {
    return(
        
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/students" element={<StudentList />}></Route>
            <Route path="/add" element={<AddStudent />}></Route>
            <Route path="/students/:id" element={<StudentDetail />}></Route>
        </Routes>
        
    )
}