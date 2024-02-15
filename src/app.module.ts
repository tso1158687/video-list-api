import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoModule } from './video/video.module';
import { ConfigModule } from '@nestjs/config';
import { DuplicatedVideoModule } from './duplicated-video/duplicated-video.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    VideoModule,
    DuplicatedVideoModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// mongodb://localhost:27017/
