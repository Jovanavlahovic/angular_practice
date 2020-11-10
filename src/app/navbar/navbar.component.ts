import { Component, OnInit } from '@angular/core';

const PET_TYPES = [
  { _id: 1, name: 'macke' },
  { _id: 2, name: 'psi' },
  { _id: 3, name: 'ptice' },
  { _id: 4, name: 'glodari' },
  { _id: 5, name: 'ribe' },
  { _id: 6, name: 'reptili' },
];


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navLinks: string[] = [];
  constructor() { }

  ngOnInit(): void {
    for(var i of PET_TYPES){
      this.navLinks.push(i.name);
    }
  }

}
