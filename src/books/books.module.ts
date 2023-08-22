import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
