import { Component } from '@angular/core';
import { Router}   from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'app/home/header/app.header.html',
})

export class HeaderComponent {
  menu: 'string';
  constructor( private router: Router ) { }
  
  logout_user(){
      localStorage.removeItem('userdata');
      this.router.navigate(['profile']);
      //console.log(this.menu);
  }
  
  menu_user(){
     //return this.menu = 'sdfsdsdsd'; 
  }
 
  

}

