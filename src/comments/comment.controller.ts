import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from './dto/create-comment-dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async fetchComments(): Promise<Comment[]> {
    return this.commentService.fetchAll();
  }

  @Post()
  async createComment(@Body() dto: CreateCommentDTO): Promise<Comment> {
    return this.commentService.createComment(dto);
  }

  @Get(':id')
  async fetchComment(@Param() param: any): Promise<Comment> {
    return this.commentService.findOne(param.id);
  }
}
