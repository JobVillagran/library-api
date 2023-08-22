import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookRepository)
    private bookRepository: BookRepository,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async createBook(title: string, author: string): Promise<Book> {
    const book = this.bookRepository.create({ title, author });
    await this.bookRepository.save(book);
    return book;
  }
}
