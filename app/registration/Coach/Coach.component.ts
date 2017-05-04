import { Component, Input,OnInit,ViewChild } from '@angular/core';
import { FormGroup,FormArray,FormControl,FormBuilder } from '@angular/forms';
import {  UserService } from '../../_services/index';
import { RegisterComponent } from '../app_reg.component';
//import { Customer } from '../customer.interface';
//import { DomSanitizer,SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
   // moduleId: module.id,
    selector: 'coach-profile',
    templateUrl: 'app/registration/Coach/Coach.component.html',
})
export class CoachComponent {
    @Input('group')
    public coachForm: FormGroup;
    sport_type: any[];
    school_level: any[];
    coach_basketball_position: any[];
    coach_football_position:any[];
    constructor(private relation: UserService,
    //private _fb: FormBuilder,private _sanitizer: DomSanitizer,
       public regist:RegisterComponent) { 
     
    }
  
  
    ngOnInit() {
        this.get_sportType();
        this.getSchool_level();
        this.getcoach_basketball_position();
        this.getcoach_football_position();
    }
    get_sportType(){
    	return this.relation.getTerm('sport_type').subscribe(
                datat => { 
                this.sport_type = datat;
                });
    }
    getSchool_level(){
    	return this.relation.getTerm('school_level').subscribe(
                datat => { 
                this.school_level = datat;
                });
    }
    
    getcoach_basketball_position(){
    	return this.relation.getTerm('coach_basketball_position_').subscribe(
                datat => { 
                this.coach_basketball_position = datat;
                });
    }
    
    getcoach_football_position(){
    	return this.relation.getTerm('coach_football_position_').subscribe(
                datat => { 
                this.coach_football_position = datat;
                });
    }
    
    alldata={};
    laveltab: any[];
    sportselect:any[];
    onselectlevel(){
       
        //localStorage.setItem('athdataselect', JSON.stringify(this.chengelevel));
        // this.athleteForm.controls['school_level'].value
 
        this.sportselect =  this.coachForm.controls['coachsport'].value;
        console.log(JSON.parse(localStorage.getItem('sportselect')));
        if(this.coachForm.controls['coachschool_level'].value){
            //this.tabroleactive = "erroratheleteclass";
            
            var location  = JSON.parse(localStorage.getItem('currentaddr'));
            var datra = {'type': 'athlete',
                 'region': location['region'],
                 'country': location['country'],
                 'state': location['state'],
                 'city': location['city'],
                 'sport': this.coachForm.controls['coachsport'].value,
                 'school_level': this.coachForm.controls['coachschool_level'].value  };
            var Dataref = JSON.stringify(datra);     
            return this.relation.get_filtered_team(Dataref).subscribe(
                datat => { 
                    this.laveltab = [];
                    for(var i = 0; i < Object.keys(datat).length; i++){
                        this.laveltab.push(Object.keys(datat)[i]);
                    }
                    //var obj = { first: 'someVal' };
                    //datat[Object.keys(datat)[0]];
                this.alldata = datat;
                //console.log(this.laveltab);
                });
                
//        this.alldata = JSON.stringify(datra);            
        
        }

    }
     
    tablist:any[];
     gettabteam(tabname:string){
         this.tablist = [];
         for(var i = 0; i < Object.keys(this.alldata[tabname]).length; i++){
            if(Object.keys(this.alldata[tabname])[i]!='null'){
                        this.tablist.push(Object.keys(this.alldata[tabname])[i]);
            }
         }
         return this.tablist;
         
     }
     
     tabsch_level:any[];
     gettabsch_level(tabname:string, schname:string){
         this.tabsch_level = [];
         for(var i = 0; i < Object.keys(this.alldata[tabname][schname]).length; i++){
            if(Object.keys(this.alldata[tabname])[i]!='null'){
                        this.tabsch_level.push(Object.keys(this.alldata[tabname][schname])[i]);
            }
         }
         return this.tabsch_level;
         
     }
     
     tabsch_team:any[];
     gettabsch_team(tabname:string, schname:string, schoollevel:string){
         this.tabsch_team = [];
         for(var i = 0; i < Object.keys(this.alldata[tabname][schname][schoollevel]).length; i++){
            if(Object.keys(this.alldata[tabname])[i]!='null'){
                var teamid =Object.keys(this.alldata[tabname][schname][schoollevel])[i];
                var team_name = this.alldata[tabname][schname][schoollevel][teamid];
                
                        this.tabsch_team.push({'teamID':teamid,'teamname':team_name});
            }
         }
         return this.tabsch_team;
         
     }

    
}

//@Component({
//  moduleId: module.id,
//  selector: 'add-team',
//  templateUrl: '/app/registration/Coach/addteam.component.html',
//})
//export class addtaeamcotch{
//     @ViewChild('modal')
//    modal: ModalComponent;
//    school_level: any[];
//    onselectleveltab= {};
//    onselectlevel:any[];
//    public coachForm: FormGroup;
//    constructor(private relation: UserService,private Coach:CoachComponent,
//       public regist:RegisterComponent) { 
//       this.onselectleveltab = {'66':"Football",'71':"Basketball"};
//       this.relation.getTerm('school_level').subscribe(
//                datat => { 
//                this.school_level = datat;
//                });
//                
//
//                //this.coachForm['coachsport'];
////                if(this.Coach.coachForm.controls['coachsport'].value){
//                
////                }
//                
////        this.school_level = this.Coach.school_level;
//    }
//    
//    open(sport:any[]) {
//        alert('sdd');
//        this.onselectlevel = sport;
//        console.log(sport);
//        this.modal.open();
//        
//    }
//    ngOnInit() {
//        this.onselectlevel = JSON.parse(localStorage.getItem('sportselect'));
//        console.log(this.onselectlevel);
//    }
//}