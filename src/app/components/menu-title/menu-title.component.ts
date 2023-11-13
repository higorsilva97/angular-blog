import { Component, Input, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news.service.service';


@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {

  newsData: any;
  @Input()
  imgTitle:String = ""

  @Input()
  title:String = ""
  
  constructor(private newsService: NewsServiceService) { }


  ngOnInit(): void {
    let i: number = 0;
    

    this.newsService.getNews().subscribe(data => {
        
        this.newsData = data;
        this.title = data.articles[i].title
        this.imgTitle = data.articles[i].urlToImage;  
    });
  }

}
