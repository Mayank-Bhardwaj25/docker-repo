import { Component } from '@angular/core';
//import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import{CommonModule} from '@angular/common'

@Component({
  selector: 'app-directives',
  imports: [ CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isLoggedIn=true
 // isLoggedOut=false

  // changeStatus() {
  //   this.isLoggedIn === true? this.isLoggedIn=false:this.isLoggedIn=true
  // }

  // login() {
  //   this.isLoggedIn=true
  // }

  // logout() {
  //   this.isLoggedIn=!this.isLoggedIn
  // }

  names=["Mayank", "Rajat", "Gaurav"]

  students=[{id:1, name:"Mayank", course:"JAVA"},
    {id:2, name:"Rajat", course:"Python"},
    {id:3, name:"Gaurav", course:"ML"},
    {id:4, name:"Ayush", course:"React"}

  ]
}
