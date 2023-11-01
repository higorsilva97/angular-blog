import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

  newsData:any;
  newsList: any[] = []; // Inicialize uma matriz vazia para as notícias

  constructor(private newsServiceService: NewsServiceService) { }

  ngOnInit(): void {
      
    this.newsServiceService.getNews().subscribe(data => {
      this.newsData = data;
      this.newsList = data.articles;
      console.log("Lista", this.newsList)
    })

  }

}
