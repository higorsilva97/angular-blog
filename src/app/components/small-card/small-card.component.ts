import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css',]
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = ""

  @Input()
  title: string = "ARTETA ENTRA PRA GRUPO APOS VENCER O CITY ARTETA ENTRA PRA GRUPO APOS VENCER O CITY ARTETA ENTRA PRA GRUPO APOS VENCER O CITY"

  @Input()
  subtitle:string = "FUTEBOL"

  constructor() { }

  ngOnInit(): void {
  }

}
