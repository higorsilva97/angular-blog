import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';
import { NewsMockService } from 'src/app/services/news-mock.service';


@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css',]
})
export class SmallCardComponent implements OnInit {

  newsList: any[] = [];

  //constructor(private newsServiceService: NewsServiceService ) { }
  constructor (private newsMockService: NewsMockService) {}

  ngOnInit(): void {

    this.newsMockService.getNews().subscribe(data => {
      this.newsList = data.articles;
      console.log("Small-card-list",this.newsList);
    })
  }
}
