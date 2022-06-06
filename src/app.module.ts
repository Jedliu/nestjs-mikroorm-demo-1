import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [MikroOrmModule.forRoot(), LibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
