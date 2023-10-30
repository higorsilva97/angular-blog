import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {

  @Input()
  imgTitle:String = ""

  @Input()
  title:String = ""
  

  constructor() { }

  ngOnInit(): void {
  }

}
