import { Component, OnInit } from '@angular/core';
import { LibraryService } from './libraryService';
import { ArticleListDto } from './ArticleListDto';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  promiseBooks: Promise<ArticleListDto[]>;
  articles: ArticleListDto[];
  errorMessage: String;

  constructor(private LibraryService: LibraryService) {
  }

  ngOnInit(): void {
    this.promiseBooks = this.LibraryService.getBooksWithPromise();
    this.promiseBooks.then(
        articles => this.articles = articles,
        error => this.errorMessage = <any>error);
  }
}
