import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Book } from './book.entity';
import { CreateBookDTO } from './dto/create-book-dto';

export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: EntityRepository<Book>,
  ) {}

  async fetchAll(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }

  async findOne(id: string): Promise<Book> {
    const findOneOptions = {
      id: id,
    };
    return this.bookRepository.findOne(findOneOptions);
  }

  async createBook(dto: CreateBookDTO): Promise<Book> {
    const { title, author } = dto;
    const book = new Book(title, author);

    await this.bookRepository.persistAndFlush(book);
    return this.findOne(book.id);
  }
}
