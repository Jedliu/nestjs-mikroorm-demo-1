import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { MikroBook } from './book.entity';
import { CreateBookDTO } from './dto/create-book-dto';

export class BookService {
  constructor(
    @InjectRepository(MikroBook)
    private readonly bookRepository: EntityRepository<MikroBook>,
  ) {}

  async fetchAll(): Promise<MikroBook[]> {
    return this.bookRepository.findAll();
  }

  async findOne(id: number): Promise<MikroBook> {
    const findOneOptions = {
      id: id,
    };
    return this.bookRepository.findOne(findOneOptions);
  }

  async createBook(dto: CreateBookDTO): Promise<MikroBook> {
    const { title, author } = dto;
    const book = new MikroBook(title, author);

    await this.bookRepository.persistAndFlush(book);
    return this.findOne(book.id);
  }
}
