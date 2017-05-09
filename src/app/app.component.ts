import { Component } from '@angular/core';
import { Router}   from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
   	userstatus: string;
   	currentUser: Object;
   	username:string;
   	user: Object;

      constructor( private router: Router ) {
	 	this.userstatus = 'out';
	 	if(localStorage.getItem('currentUser')){
	 		var currentUser = localStorage.getItem('currentUser');
	 		if(currentUser['uid']){
		      	this.userstatus = 'in';
		      	if(currentUser['field_first_name']){
		      	  this.username = currentUser['field_first_name'][0]['value'];
			      if(this.user['field_middle_name'][0]){
			        this.username += ' '+this.user['field_middle_name'][0]['value'];
			      }
			      if(this.user['field_last_name'][0]){
			        this.username += ' '+this.user['field_last_name'][0]['value'];
			      }
		      	}
		    } else {
		    	this.userstatus = 'out';
		    }
	 	}
	 	
  	
    
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