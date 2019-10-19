import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Driver } from '../model/driver';



@Injectable({
  providedIn: 'root'
})
export class DriverServices {

  private baseURL: string = '//localhost:4200/driver'; 
  private id:number;

  constructor(private http:HttpClient) {

  }

//Create new Driver
createDriver(driver:Driver) : Observable<Driver>
{
  return this.http.post<Driver>(this.baseURL + '/create', driver);
}

//Find by ID
findDriverById(id:number) : Observable<Driver>
{
  return this.http.get<Driver>(this.baseURL + '/find/' + id);
}

//Update Existing Driver
updateDriver(driver:Driver) : Observable<Driver>{

  return this.http.put<Driver>(this.baseURL + '/update', driver);

}

//Delete Existing Driver
deleteDriver(id: number) : Observable<any>
{
  return this.http.delete(this.baseURL + '/delete/' + id);
}

//Get all Drivers
getAll() : Observable<Driver[]>
{
  return this.http.get<Driver[]>(this.baseURL + '/getAll');
}

saveId(id:number)
{
  this.id = id;
}

getId() : number
{
  return this.id;
}




}
