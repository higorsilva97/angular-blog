import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-others',
  templateUrl: './card-others.component.html',
  styleUrls: ['./card-others.component.css']
})
export class CardOthersComponent implements OnInit {

  @Input()
  photo: String = ""

  @Input()
  title: String = ""

  @Input()
  description: String = ""

  constructor() { }

  ngOnInit(): void {
  }

}
