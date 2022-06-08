import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class Comment {
  @PrimaryKey({ onCreate: () => v4() })
  id!: string;

  @Property()
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
