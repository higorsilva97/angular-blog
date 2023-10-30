import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

  @Input()
  title:string = ""
  @Input()
  author:string = ""
  @Input()
  data:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
