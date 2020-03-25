import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStoreApp';
  books: Book;
  constructor(private bookService: BookService) {
    this.bookService.getBookFromDB('581').subscribe((response: Book) => {
      this.books = response;
      console.log('Book name::' + this.books.name);

    });
  }
}
