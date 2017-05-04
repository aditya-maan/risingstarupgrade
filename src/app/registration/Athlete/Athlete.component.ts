import { Component, Input,OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl,FormBuilder } from '@angular/forms';
import {  UserService } from '../../_services/index';
import { RegisterComponent } from '../app_reg.component';
import { Customer } from '../customer.interface';
import { DomSanitizer,SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
    //moduleId: module.id,
    selector: 'athlete-profile',
    templateUrl: 'app/registration/Athlete/athlete.component.html',
})
export class AthleteComponent implements OnInit {
    @Input('group')
    public athleteForm: FormGroup; 
    chengelevel:string
    sport_type: any[];
    school_level: any[];
    offense_position: any[]; 
    defense_position: any[];
    special_teams_position: any[];
    primary_position: any[];
    secondary_position:any[];
    basketball_position:any[];
   // control_athlete:string;
    schoolname:string;
    constructor(private relation: UserService,private _fb: FormBuilder,private _sanitizer: DomSanitizer,
       public regist:RegisterComponent) { 
//        console.log(localStorage.getItem('currentaddr'));
//        console.log(localStorage.getItem('athdataselect'));
        
        //this.control_athlete = this.regist.regionsel;
    }

    ngOnInit() {
//    	console.log(this.get_sportType());
    	this.getSchool_level();
        this.get_sportType();
        this.Getoffense_position();
        this.Getdefense_position();
        this.Getspecial_teams_position();
        this.Getprimary_position();
        this.Getsecondary_position();
        this.Getbasketball_position();
     }

    get_sportType(){
    	return this.relation.getTerm('sport_type').subscribe(
                datat => { 
                this.sport_type = datat;
                });
    }

    Getoffense_position(){
    	return this.relation.getTerm('offense_position').subscribe(
                datat => { 
                this.offense_position = datat;
                });
    }
    
    Getdefense_position(){
    	return this.relation.getTerm('defense_position').subscribe(
                datat => { 
                this.defense_position = datat;
                });
    }
    
    getSchool_level(){
    	return this.relation.getTerm('school_level').subscribe(
                datat => { 
                this.school_level = datat;
                });
    }
    Getspecial_teams_position(){
        return this.relation.getTerm('special_teams_position').subscribe(
                datat => { 
                this.special_teams_position = datat;
                });
    }
    
    Getprimary_position(){
        return this.relation.getTerm('primary_position').subscribe(
                datat => { 
                this.primary_position = datat;
                });
    }
    Getsecondary_position(){
        return this.relation.getTerm('secondary_position').subscribe(
                datat => { 
                this.secondary_position = datat;
                });
    }
    Getbasketball_position(){
        return this.relation.getTerm('basketball_position').subscribe(
                datat => { 
                this.basketball_position = datat;
                });
    }
    
    alldata={};
    laveltab: any[];
    onselectlevel(){
       
        //localStorage.setItem('athdataselect', JSON.stringify(this.chengelevel));
        // this.athleteForm.controls['school_level'].value
        
        //console.log(JSON.stringify(this.chengelevel));
        if(this.athleteForm.controls['school_level'].value){
            var location  = JSON.parse(localStorage.getItem('currentaddr'));
            var datra = {'type': 'athlete',
                 'region': location['region'],
                 'country': location['country'],
                 'state': location['state'],
                 'city': location['city'],
                 'sport': this.athleteForm.controls['sport'].value,
                 'school_level': this.athleteForm.controls['school_level'].value  };
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
    
    lll:string;
    gettablevel(tabname:string){
        var tablist = this.alldata[tabname];
        console.log(tabname);
        var html = '';
                   // for(var i = 0; i < Object.keys(datat).length; i++){
                        //html += '<li> -'+tablist+'</li>';
                        //
                        //
        for(var i = 0; i < Object.keys(tablist).length; i++){
         if(Object.keys(tablist)[i] != 'null') {
            html += '<div><strong>'+Object.keys(tablist)[i]+'</strong>';
            var lavelteam = tablist[Object.keys(tablist)[i]];
                if(Object.keys(tablist)[i] != 'null'){
                    for(var j = 0; j < Object.keys(lavelteam).length; j++){
                        html += '<div><label>'+Object.keys(lavelteam)[j]+'</label>';
                        var teamlist = lavelteam[Object.keys(lavelteam)[j]];
                        for(var k = 0; k < Object.keys(teamlist).length; k++){
                            html +='<div>';
                            html +='<input type="checkbox" value="'+Object.keys(teamlist)[k]+'" >';
                            html += teamlist[Object.keys(teamlist)[k]];
                            html +='</div>';
                            //html += '------'+teamlist[Object.keys(teamlist)[k]]+'=='+Object.keys(teamlist)[k]+'<br>';
                        }
                        html += '</div>';
                    }
                }
                html += '</div>';
         }
        }

                        //this.laveltab.push(Object.keys(datat)[i]);
                        
                   // }

                    this.lll = html;
                    return this._sanitizer.bypassSecurityTrustHtml(html);
    }
    
    
    form = new FormGroup({
    insschools: new FormArray([
      new FormControl(''),
      new FormControl(''),
      new FormControl(''),
    ]),
  });
  
     get insschools(): FormArray { return this.form.get('insschools') as FormArray; }
    addSchoolName() { 
        this.insschools.push(new FormControl());
        this.insschools.push(this._fb.array(['']));
        //this._fb.group({insschools:this._fb.array([''])});
    //this.insschools.patchValue(['LA', 'MTV']);
     }
    
}