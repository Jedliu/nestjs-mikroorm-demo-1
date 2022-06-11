import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Book } from '../books/book.entity';

@Entity()
export class Comment {
  @PrimaryKey({ onCreate: () => v4() })
  id!: string;

  @Property({ autoincrement: true })
  _id!: number;

  @Property()
  content: string;

  @ManyToOne()
  book: Book;

  constructor(content: string) {
    this.content = content;
  }
}
