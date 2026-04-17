import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { Student as StudentService } from '../../services/student';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update implements OnInit {

  updateStud!:Student
    constructor(private fb:FormBuilder, private router:Router, private service:StudentService){}

    studentForm!:FormGroup
  studentList:Student[] =[
    new Student(234, "amit", "Spring"),
    new Student(456, "raj", "Python")

  ]

  ngOnInit(): void {
    this.studentForm=this.fb.group({
      sid:[''],
      sname:['', Validators.required, Validators.minLength(3)],
      course:['', Validators.required]
    })
    this.service.getAllStudents().subscribe((data) => this.studentList=data)
  }

  getStudentById(sid:string) {
    //const id = Number(sid)
     const stud= this.service.getStudentById(sid).subscribe(data => stud=data);
    if(stud) {
      
      this.updateStud=stud
      this.studentForm.patchValue(this.updateStud)
    }
    else{
      alert("no student with this id")
    }
    
  }

  updateStudent() {
    const stud = this.studentForm.value;
    const id=this.studentList.findIndex(s => s.id===stud.sid)
    this.studentList[id] = ({...stud}) 
    this.router.navigate(['/list'])
  }

  
}
