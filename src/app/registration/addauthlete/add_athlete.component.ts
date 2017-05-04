import { Component, Input,OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl,FormBuilder } from '@angular/forms';
import { LocationService, UserService } from '../../_services/index';

@Component({
   // moduleId: module.id,
    selector: 'address',
    templateUrl: 'app/registration/addathlete/add_athlete.component.html',
})
export class add_athleteComponent implements OnInit {
   @Input('group')
    public adressForm: FormGroup;
    school_level:any[];
    constructor(private _fb: FormBuilder,private location: LocationService,private relation: UserService) { 

    }

    ngOnInit() {
        this.getlavel_of_school_level();
     }
     
     getlavel_of_school_level(){
    	return this.relation.getTerm('school_level').subscribe(
                datat => { 
                this.school_level = datat;
                });
    }

    
    
}