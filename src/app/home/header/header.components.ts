import { Component } from '@angular/core';
import { Router}   from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'app/home/header/app.header.html',
})

export class HeaderComponent {
  menu: 'string';
  constructor( private router: Router ) {
//this.userstatus = 'out';
  // if(localStorage.getItem('currentUser')){
  //     this.userstatus = 'in';
  //     this.user = JSON.parse(localStorage.getItem('currentUser'));
  //     this.username = this.user['field_first_name'][0]['value'];
  //     if(this.user['field_middle_name'][0]){
  //       this.username += ' '+this.user['field_middle_name'][0]['value'];
  //     }
  //     if(this.user['field_last_name'][0]){
  //       this.username += ' '+this.user['field_last_name'][0]['value'];
  //     }
      
  //     console.log(this.username);
  //   } else {
  //   this.userstatus = 'out';
  //   }
    
   } 


  ngOnInit() {

    
    
  } 
  
  logout_user(){
      localStorage.removeItem('currentUser');
      this.router.navigate(['login']);
  }
  
  menu_user(){
     //return this.menu = 'sdfsdsdsd'; 
  }
 
  

}

