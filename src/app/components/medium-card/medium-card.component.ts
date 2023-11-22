import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';
import { NewsMockService } from 'src/app/services/news-mock.service';


@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css',]
})
export class MediumCardComponent implements OnInit {

  newsList: any[] = [];
  newsData: any;
  newsDisplayed: number = 3;

  //constructor(private newsServiceService: NewsServiceService ) { }
  constructor (private newsMockService: NewsMockService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews() {
    this.newsMockService.getNews().subscribe(data => {
      this.newsData = data;
      this.newsList = data.articles;
    });
  }

  loadMoreNews() {
    this.newsDisplayed += 3;
  }
}
