import { Module } from '@nestjs/common';
import { DuplicatedVideoController } from './duplicated-video.controller';
import { DuplicatedVideoService } from './duplicated-video.service';
import {
  DuplicatedVideoSchema,
  DuplicatedVideo,
} from 'src/schema/duplicated-videos.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DuplicatedVideo.name,
        schema: DuplicatedVideoSchema,
      },
    ]),
  ],
  controllers: [DuplicatedVideoController],
  providers: [DuplicatedVideoService],
})
export class DuplicatedVideoModule {}
