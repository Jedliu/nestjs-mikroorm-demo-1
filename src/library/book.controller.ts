import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MikroBook } from './book.entity';
import { BookService } from './book.service';
import { CreateBookDTO } from './dto/create-book-dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async fetchBooks(): Promise<MikroBook[]> {
    return this.bookService.fetchAll();
  }

  @Post()
  async createBook(@Body() dto: CreateBookDTO): Promise<MikroBook> {
    return this.bookService.createBook(dto);
  }

  @Get(':id')
  async fetchBook(@Param() param: any): Promise<MikroBook> {
    return this.bookService.findOne(+param.id);
  }
}
