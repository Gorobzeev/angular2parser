import { Component, OnInit } from '@angular/core';
import { ArticleListDto } from './articleListDto';
import {Observable} from 'rxjs/Observable';
import {LibraryService} from './libraryService';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  observableArticles: Observable<ArticleListDto[]>;
  articles: ArticleListDto[];
  errorMessage: String;

  constructor(private LibraryService: LibraryService) {
  }

  ngOnInit(): void {
    this.observableArticles = this.LibraryService.loadArticleList();
    this.observableArticles.subscribe(
        articles => this.articles = articles,
        error => this.errorMessage = <any>error);
  }
}
