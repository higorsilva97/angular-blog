import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css',]
})
export class SmallCardComponent implements OnInit {

  newsList: any[] = [];

  constructor(private newsServiceService: NewsServiceService ) { }

  ngOnInit(): void {

    this.newsServiceService.getNews().subscribe(data => {
      this.newsList = data.articles;
      console.log("Small-card-list",this.newsList);
    })
  }
}
