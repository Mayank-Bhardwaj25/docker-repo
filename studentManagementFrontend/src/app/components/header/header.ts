import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
//import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
constructor(public router:Router){}

isLoginPage():boolean {
  return this.router.url === '/';
}
isSignUpPage(): boolean {
  return this.router.url === '/signup'
}

}
