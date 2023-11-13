import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css',]
})
export class MediumCardComponent implements OnInit {

  newsList: any[] = [];

  constructor(private newsServiceService: NewsServiceService ) { }

  ngOnInit(): void {

    this.newsServiceService.getNews().subscribe(data => {
      this.newsList = data.articles;
      console.log("medium-card-list",this.newsList);
    })
  }

}
