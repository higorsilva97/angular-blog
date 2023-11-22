import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';
import { NewsMockService } from 'src/app/services/news-mock.service';



@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  newsList: any[] = []; 
  newsListTop: any[] = [];

  newsData: any;
  newsDataTop: any;

  numNews: number = 1;

 //constructor(private newsServiceService: NewsServiceService) { } - Service API NEWS
  constructor(private newsMockService: NewsMockService) {}

  ngOnInit(): void {
    this.newsMockService.getNews().subscribe(data => {
      this.newsData = data.articles;
      this.newsList = data.articles.filter((article:any) => article.urlToImage !== null);
      console.log(this.newsData)
  });

  }

}
