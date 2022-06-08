import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class Comment {
  @PrimaryKey({ onCreate: () => v4() })
  id!: string;

  // comment out below rows
  // @Property({ autoincrement: true, primary: false })
  // _id!: number;

  @Property()
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
