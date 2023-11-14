import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';


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

  numNews: number = 0;


  constructor(private newsService: NewsServiceService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.newsData = data.articles;
      this.newsList = data.articles.filter((article:any) => article.urlToImage !== null);
  });

  }

}
