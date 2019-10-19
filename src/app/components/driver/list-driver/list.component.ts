import { Component, OnInit } from '@angular/core';
import {Driver} from "../../../model/driver";
import { DriverServices } from 'src/app/services/driver.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private drivers: Driver[];

  private driver:Driver;
  id:number;

  constructor(private driverService:DriverServices, private router:Router) { }

  ngOnInit() 
  {
   this.getDrivers();
   this.setActive();
  }

  getDrivers()
  {
    this.driverService.getAll().subscribe(data => {
    this.drivers = data;
    });
  }

  deleteDriver(id:number)
  {
    this.driverService.deleteDriver(id).subscribe
    (
      data => { console.log(data); this.getDrivers() }
    );
  }

  editDriver(id:number) {

    this.router.navigate(['/edit']);
    this.driverService.saveId(id);

  }

  setActive(){
    document.getElementById('listLink').classList.add('active');
    document.getElementById('addLink').classList.remove('active');
  }





}
