import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  newsList: any[] = []; // Inicialize uma matriz vazia para as notícias

  newsData: any;

  numNews: number = 2;


  constructor(private newsService: NewsServiceService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.newsData = data.articles;
      console.log(this.newsData)

      this.newsList = data.articles.filter((article:any) => article.urlToImage !== null);
      
     
  });
  }

}
