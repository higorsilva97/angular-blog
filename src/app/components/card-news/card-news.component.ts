import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';
import { NewsMockService } from 'src/app/services/news-mock.service';


@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

  newsData: any;
  newsList: any[] = [];
  newsDisplayed: number = 5;

  //constructor(private newsServiceService: NewsServiceService) { }
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
    this.newsDisplayed += 5;
  }
}
