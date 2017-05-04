
import { Component, OnInit,Pipe, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Customer } from './customer.interface';
import {  LocationService,UserService } from '../_services/index';
import {IMyOptions} from 'mydatepicker';

@Component({
 // moduleId: module.id,
  selector: 'my-reg',
  templateUrl: 'app/registration/app_reg.component.html',
})

@Pipe({name: 'keys'})

export class RegisterComponent implements OnInit {
    @Input('group')
    public myForm: FormGroup;
    regions: any[]; 
    countries: any[] = [];
    states: any[] = [];
    hideclass: string; 
    class: string; 

    Tabs = [{'name':'athlete', 'value':'Athlete'}, 
        {'name':'coach','value':'Coach'}, 
        {'name':'admin_teacher','value':'Admin/Teacher'}, 
        {'name':'fan','value':'Fan'},
        {'name':'collegiate_affiliations','value':'Scout(no collegiate affiliations)'},
        {'name':'parent_relative','value':'Parent/Relative'}];

    constructor(private _fb: FormBuilder,private location: LocationService,private relation: UserService) {  
        this.regions =  this.location.get_regions();
        this.initAthlete();
        //console.log(localStorage.getItem('currentaddr'));
                }

    private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
                
    ngOnInit() {        
        this.myForm = this._fb.group({
            firstname: ['', [Validators.required]],
            middlename: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            date: ['', [Validators.required]],
            gender:['', [Validators.required]], 
            mobile:['', [Validators.required, Validators.minLength(5)]],
            password:['', [Validators.required]],
            confirmPassword: ['', [Validators.required]],
            email:['', [Validators.required]],
            emailconform: ['', [Validators.required]],
            region:['', [Validators.required]],
            country:['', [Validators.required]], 
            state:['', [Validators.required]], 
            city:['', [Validators.required]],
            athlete: this._fb.array([]),
            coach: this._fb.array([]),
            addresses: this._fb.array([]),
            addresses1:this._fb.array([]),
        });
        this.addform_controller();
        this.addAddress();
    }

    setDate(): void {
        // Set today date using the setValue function
        let date = new Date();
        this.myForm.setValue({myDate: {
        date: {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()}
        }});
    }

    clearDate(): void {
        // Clear the date using the setValue function
        this.myForm.setValue({myDate: ''});
    }

    initCoach() {
        return this._fb.group({
            coachsport: ['', Validators.required],
            coachschool_level: [''],
            coach_footballPos: [''],
            coach_basketbalPos: [''],
            team_coach: ['', Validators.required],
        });
    }
    initAthlete() {
        return this._fb.group({
            sport: ['', Validators.required],
            school_level: ['', Validators.required],
            offense: ['', ],
            defense: ['', ],
            specialTeams: ['', ],
            primaryposition: ['', ],
            secondaryposition: ['', ],
            basketball: ['', ],
            height: ['', Validators.required],
            weight: ['', Validators.required],
            forty: ['', ],
            shuttle: ['', ],
            bench: ['', ],
            squat: ['', ],
            cline: ['', ],
            vertical: ['', Validators.required],
            team_athlete: ['',],
            insschools:this._fb.array(['','','']),
        });
        
        
  
    }
    
    initAddress() {
        return this._fb.group({
            preschooldata_teamname: ['', Validators.required],
            preschooldata_teamlevel: ['', Validators.required],
        });
    }
    
    
    tabroleactive:string;
   addform_controller() {
        const control_athlete = <FormArray>this.myForm.controls['athlete'];
        const athleteCtrl = this.initAthlete();
        control_athlete.push(athleteCtrl);
        
        const control = <FormArray>this.myForm.controls['coach'];
        const coachCtrl = this.initCoach();
        control.push(coachCtrl);
    } 
    
     addAddress() {
        const controla = <FormArray>this.myForm.controls['addresses'];
        const addrCtrla = this.initAddress();
        
        controla.push(addrCtrla);

    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }
    
    
    
    
    
//    evnttt:string;
//   callType(event:string){
//    this.evnttt = event;   
//       //console.log(JSON.stringify(this.evnttt));
//   }

    save(model: Customer) {
        console.log(model);
    }
    
    getalladdr(){
        var addrarray = {"region" : this.myForm.value['region'], 
        "country" : this.myForm.value['country'],
        "state" : this.myForm.value['state'],
        "city" : this.myForm.value['city'],
         };
         localStorage.setItem('currentaddr', JSON.stringify(addrarray));
    }

    onChangeregion(deviceValue:string) {
        this.location.get_CountryByRegion(deviceValue).subscribe(
                datacountry => { 
                var data= {};
                this.countries = [];
                var datacountrylist  = datacountry;
                console.log(datacountry);
                for(var code in datacountrylist){                         
                       data = {
                           'code' : code,
                           'label' : datacountrylist[code],
                       };
                       this.countries.push(data);
                   }
                });
    }

    onChangecountry(cValue:string) {    
        this.location.get_statusByCountry(cValue).subscribe(
                datastates => { 
                var data= {};
                this.states = [];
                for(var code in datastates){                         
                       data = {
                           'code' : code,
                           'label' : datastates[code],
                       };
                       this.states.push(data);
                   }
                   if(this.states.length >0){
                   this.hideclass = 'show';
                   } else {
                    this.hideclass = 'hide';
                   }
                });
    }

    public onclicktab(name:string){
        this.class = name;  
    }       
}