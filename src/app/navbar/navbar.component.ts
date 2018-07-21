import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menus = [
    {
    name: "Home",
    link: "#"
   },
   {
    name: "Google",
    link: "http://www.google.com"
   },
   {
    name: "Dropdown",
    link: "http://example.com",
    id: "dropdown01"
   }
  ];

  constructor() { }

  ngOnInit() {
  }

}
