import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/book.module';
import { CommentModule } from './comments/comment.module';

@Module({
  imports: [MikroOrmModule.forRoot(), BookModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
