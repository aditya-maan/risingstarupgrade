import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LocationService {
    
    constructor(private http: Http) { console.log(this.country); }
    country: string;
    regions: any[] ;
    
    public get_CountryByRegion(reCode:string){
        return this.http.get('/app/_services/location/regioncountry.json')
            .map((response: Response) =>  response.json()[reCode] );
    }
    
    public get_statusByCountry(cuCode:string){
        return this.http.get('/app/_services/location/countrystate.json')
            .map((response: Response) => response.json()[cuCode] );
    }
    
    public get_allcountry(){
        return this.http.get('/app/_services/location/country.json')
            .map((response: Response) => response );
    }

    public get_regions(){ 
        return this.regions = [ {'name':'1', 'value':'Africa'},
        {'name':'6', 'value':'Asia, Pacific, Middle East'},
        {'name':'11', 'value':'Canada'},
        {'name':'16', 'value':'Europe'},
        {'name':'21', 'value':'Latin America/Caribbean'},
        {'name':'26', 'value':'Oceania'},
        {'name':'31', 'value':'United States'}];
        
    }
}