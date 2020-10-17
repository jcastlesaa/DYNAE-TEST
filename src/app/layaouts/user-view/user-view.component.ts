import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  public sideBarOpen: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  SideBarToogler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
