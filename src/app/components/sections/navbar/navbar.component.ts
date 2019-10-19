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

  changeLink1() {
    document.getElementById('listLink').classList.add('active');
    document.getElementById('addLink').classList.remove('active');

  }

  changeLink2() {
    document.getElementById('listLink').classList.remove('active');
    document.getElementById('addLink').classList.add('active');
  }



}
