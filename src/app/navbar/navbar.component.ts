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
    link: "/"
   },
   {
    name: "About",
    link: "/about"
   },
   {
    name: "Dropdown",
    id: "xxx",
    link: "http://google.co.th",
    subMenus: [
      {name: "Action", link: "#"},
      {name: "Another action", link: "#"},
      {name: "Something else here", link: "#"}
    ]
   }
  ];

  constructor() { }

  ngOnInit() {
  }

}
