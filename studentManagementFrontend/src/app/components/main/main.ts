import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
 
  constructor(private router:Router){}
username=""
password=""

login() {
  if(this.username === "Mayank" && this.password==="Mayank12") {
    alert("Login Successfull")
  this.router.navigate(['/list'])
  }
  
  else
    alert("Invalid Credntials")
}

}
