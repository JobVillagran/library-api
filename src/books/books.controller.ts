import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBook(@Body('title') title: string, @Body('author') author: string): Promise<Book> {
    return this.booksService.createBook(title, author);
  }
}
