import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  create = new Book(); 
  allBooks = new Array<Book>();
  fetch = new Book();
  bookSrv: BookService;
  bk: Book;

  constructor(private bookService: BookService ) {
    this.create.id = 580;
    this.bookSrv = bookService;
    this.getAllBooks();
   }

  ngOnInit() {
  }
  getBook(id: any) {
    console.log('id::' + id.id);
    this.bookService.getBookFromDB(id.id).subscribe((response: Book ) => {
      this.bk = response;
      console.log('Book from input text box::' + this.bk.name);
      this.fetch = response;
    });
  }

  getAllBooks() {
    this.bookService.getAllBooksFromDB().subscribe((response: Book[]) => {
      this.allBooks = response;
    });
  }
  actionEvent(event:any){
    console.log('Event::' + event);
  }

}
