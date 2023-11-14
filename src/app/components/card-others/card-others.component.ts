import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';

@Component({
  selector: 'app-card-others',
  templateUrl: './card-others.component.html',
  styleUrls: ['./card-others.component.css']
})
export class CardOthersComponent implements OnInit {

  newsList: any[] = [];

  constructor(private newsServiceService: NewsServiceService ) { }

  ngOnInit(): void {

    this.newsServiceService.getNews().subscribe(data => {
      this.newsList = data.articles;
      console.log("card-others-list",this.newsList);
    })
  }

}
