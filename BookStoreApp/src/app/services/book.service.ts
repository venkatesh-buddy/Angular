import { Injectable } from '@angular/core';
import { Book } from '../book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBookFromDB(id: any): Observable<Book> {
    return this.httpClient.get<Book>('/book/' + id);

  }

  getAllBooksFromDB(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('/books');
  }
}
