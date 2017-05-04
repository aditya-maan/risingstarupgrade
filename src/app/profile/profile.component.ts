import { Component, Injectable} from '@angular/core';
//import { User } from '../_models/index';
import { UserService, LocationService } from '../_services/index';
import { Router, ActivatedRoute} from '@angular/router';

//import { ProfileBannerComponent }  from './profile_banner/profile_banner.component';

@Component({
 // moduleId: module.id,
  templateUrl: 'app/profile/app.profile.html',
})

@Injectable()
export class ProfileComponent {
  
    currentUser: Object;
    userName: string;
    address: string; 
    states:any[];

    constructor( private router: Router,  private route: ActivatedRoute, private location: LocationService
        ) { 
        //console.log('---'+localStorage.getItem('currentUser'));

             if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.currentUsername()
            //return true;
            } else { 
                this.router.navigate(['/login']);
            }
          }

    onChangecountry(cValue:string) {    
        this.location.get_statusByCountry(cValue).subscribe(
                datastates => { 
                var data= {};
               
                this.states = datastates;
                });
    }

    public currentUsername(){
    console.log(this.currentUser);

             if(this.currentUser) {
             this.userName = '';
                if(this.currentUser['field_first_name'][0]){
                  var fname = this.currentUser['field_first_name'][0].value;
                  this.userName += fname+' '; 
                }
                if(this.currentUser['field_middle_name'][0]){
                  var mname =   this.currentUser['field_middle_name'][0].value;
                  this.userName += mname+' '; 
                } else 
                if(this.currentUser['field_last_name'][0]){
                  var lname =   this.currentUser['field_last_name'][0].value;
                  this.userName += lname; 
                }

                this.address = '';

                if(this.currentUser['field_city'][0]){
                  var city = this.currentUser['field_city'][0].value;
                  this.userName += city+', '; 
                }
                
                if(this.currentUser['field_state'][0]){
                  console.log(this.onChangecountry(this.currentUser['field_country'][0].value));
                
                  //var state = this.currentUser['field_state'][0].value;
                  //this.userName += state+', '; 
                }

                


                


            } 



        
        
    }      


          
}
        

 

