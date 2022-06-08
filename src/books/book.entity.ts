import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class Book {
  @PrimaryKey({ onCreate: () => v4() })
  id!: string;

  // comment out below rows
  // @Property({ autoincrement: true, primary: false })
  // _id!: number;

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
