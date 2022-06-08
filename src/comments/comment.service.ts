import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Comment } from './comment.entity';
import { CreateCommentDTO } from './dto/create-comment-dto';

export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: EntityRepository<Comment>,
  ) {}

  async fetchAll(): Promise<Comment[]> {
    return this.commentRepository.findAll();
  }

  async findOne(id: string): Promise<Comment> {
    const findOneOptions = {
      id: id,
    };
    return this.commentRepository.findOne(findOneOptions);
  }

  async createComment(dto: CreateCommentDTO): Promise<Comment> {
    const comment = new Comment(dto.content);

    await this.commentRepository.persistAndFlush(comment);
    return this.findOne(comment.id);
  }
}
