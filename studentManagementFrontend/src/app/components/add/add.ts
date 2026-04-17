import { Component } from '@angular/core';
import { Student as StudentService} from '../../services/student';
import { Student } from '../../models/student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {

  constructor(private router:Router, private service:StudentService){}

student:Student=new Student(0, "", "");
studentList:Student[]=[]


addStudent() {
  // this.studentList.push({...this.student});
  this.service.addStudentService(this.student).subscribe(data => console.log(data+ "Added Successfully !"))
  this.router.navigate(['/list'])
  console.log(this.studentList);
}


}
