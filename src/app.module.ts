import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tso1158687:JGgEJFzkIw7fjrnH@cluster0.ycwlrtf.mongodb.net/',
    ),
    VideoModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
