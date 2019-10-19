import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/model/driver';
import { DriverServices } from 'src/app/services/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  driver:Driver;
  id:string;
  submitted = false;

  constructor(private driverService:DriverServices, private router:Router) { }

  ngOnInit() {
    this.getDriverToEdit();

  }

  getDriverToEdit(){
    this.id = this.driverService.getId();
    this.driverService.findDriverById(this.id).subscribe(data =>{
    this.driver = data;
    });

  }

  update(){
    this.driverService.updateDriver(this.driver).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/drivers']);
  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){
    this.router.navigate(['/drivers']);

  }


}
 