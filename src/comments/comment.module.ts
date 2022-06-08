import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Comment] })],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
