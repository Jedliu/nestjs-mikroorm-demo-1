import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(
    //   {
    //   entities: ['dist/**/*.entity.js'],
    //   entitiesTs: ['src/**/*.entity.ts'],
    //   dbName: 'library',
    //   type: 'mysql',
    //   user: 'root',
    //   password: 'password'
    // }
    ), LibraryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
