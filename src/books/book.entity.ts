import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Comment } from '../comments/comment.entity';

@Entity()
export class Book {
  @PrimaryKey({ onCreate: () => v4() })
  id!: string;

  @Property({ autoincrement: true })
  _id!: number;

  @Property()
  title: string;

  @Property()
  author: string;

  @Property()
  description?: string = null;

  @OneToMany({
    entity: () => Comment,
    mappedBy: 'book',
    hidden: true,
  })
  comments = new Collection<Comment>(this);

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}
