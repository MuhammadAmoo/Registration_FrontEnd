import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';
import { Driver } from '../../../model/driver';
import {Router} from '@angular/router';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  driver: Driver = new Driver();
  submitted = false;

  constructor(private driverService:DriverService, private router:Router) { }

  ngOnInit() 
  {

  }

  newDriver() : void 
  {
    this.submitted = false;
    this.driver = new Driver();
  }

  save()
  {
    this.driverService.createDriver(this.driver).subscribe(data => console.log(data), error1 => console.log(error1));
    this.driver = new Driver();
  }

  onSubmit()
  {
    this.submitted = true;
    this.save();
    this.router.navigate(['/driver']);
  }  

  cancel()
  {
    this.router.navigate(['/driver']);
  }

}
