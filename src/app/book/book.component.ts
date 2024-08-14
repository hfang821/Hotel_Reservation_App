import { Component } from '@angular/core';
import {Book} from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  ngOnInit(){
    const books = localStorage.getItem('books');

      this.newBooks = books ? JSON.parse(books) : [];

  }


  newBookTitle: string="";
  newBookAuthor: string="";

  newBooks: Book [] = [];

  addBook(){
    if(this.newBookTitle.trim().length && this.newBookAuthor.trim().length){
      const newBook : Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor,
      }

      this.newBooks.push(newBook);

      localStorage.setItem('books', JSON.stringify(this.newBooks));
    }
  }

  removeBook(i: number){
    this.newBooks.splice(i, 1);

    localStorage.setItem('books', JSON.stringify(this.newBooks));
    }
}
