import { Body, Controller, Get, Post } from "@nestjs/common";
import { MikroBook } from "./book.entity";
import { BookService } from "./book.service";
import { CreateBookDTO } from "./dto/create-book-dto";

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    async fetchBooks(): Promise<MikroBook[]> {
        return this.bookService.fetchAll()
    }

    @Post()
    async createBook(@Body() dto: CreateBookDTO): Promise<MikroBook> {
        console.log(dto)
        return this.bookService.createBook(dto);
    }
}