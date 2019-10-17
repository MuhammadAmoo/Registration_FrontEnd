import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeLink1(){
    document.getElementById('driversLink').classList.add('active');
    document.getElementById('addLink').classList.remove('active');
    document.getElementById('archivedLink').classList.remove('active');
  }

  changeLink2(){
    document.getElementById('addLink').classList.add('active');
    document.getElementById('driversLink').classList.remove('active');
    document.getElementById('archivedLink').classList.remove('active');

  }

  changeLink3(){
    document.getElementById('addLink').classList.remove('active');
    document.getElementById('driversLink').classList.remove('active');
    document.getElementById('archivedLink').classList.add('active');

  }


}
