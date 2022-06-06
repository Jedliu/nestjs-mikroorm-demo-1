import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { MikroBook } from './book.entity';
import { BookService } from './book.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [MikroBook] })],
  controllers: [BookController],
  providers: [BookService],
})
export class LibraryModule {}
