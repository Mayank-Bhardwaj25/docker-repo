import { Component, OnInit } from '@angular/core';
import { Student as StudentService} from '../../services/student';
import { Student  } from '../../models/student';
//import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule, NgForOf } from '@angular/common';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-list',
  imports: [NgForOf, RouterLink, CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {

  studentList:Student[] =[]
  constructor(private service:StudentService){}
  ngOnInit(): void {
    this.service.getAllStudents().subscribe(data => {console.log(data)
    this.studentList=data}  
    );
    //throw new Error('Method not implemented.');
  }
 

  // studentlist:Student[]=[new Student(123, "swapna", "Java"), 
  //   new Student(234, "amit", "Spring"),
  //   new Student(456, "raj", "Python")
  // ];

  deleteStudent(id:number) {
    //const sid = Number(id)
    //const stud = this.studentlist.find(s =>s.sid === sid)
    this.studentList = this.studentList.filter(s => s.id != id)
  }


}
