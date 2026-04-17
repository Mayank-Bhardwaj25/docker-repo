import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student as StudentModel } from '../models/student';

const baseUrl = "http://localhost:4000/students"

@Injectable({
  providedIn: 'root',
})
export class Student {

  constructor(private http:HttpClient){}

  getAllStudents():Observable<any> {
   return  this.http.get(baseUrl);
  }


  addStudentService( student:StudentModel):Observable<StudentModel|any> {
    return this.http.post(baseUrl, student)
  }

  getStudentById(id:string):Observable<StudentModel|any> {
    return this.http.get(baseUrl+"/id",)
  }
}
