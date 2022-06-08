import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class Book {
  @PrimaryKey({ onCreate: () => v4() })
  id!: string;

  @Property()
  title: string;

  @Property()
  author: string;

  @Property()
  description?: string = null;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}
