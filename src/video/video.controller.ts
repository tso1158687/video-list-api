import { Controller, Get, Param, Post } from '@nestjs/common';

import { VideoService } from './video.service';
import { Video } from 'src/schema/video.schema';

@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @Get()
  getVideoList(): Promise<Video[]> {
    const result = this.videoService.getVideoList();
    result.then((data) => {
      console.log(data);
    });

    return this.videoService.getVideoList();
  }

  @Get(':filename')
  findByFilename(@Param() params): Promise<Video[]> {
    return this.videoService.findByFilename(params.filename);
  }

  @Post()
  create(): Promise<Video> {
    return this.videoService.create({
      file_name: 'test',
      file_path: ['test1', 'test2'],
    });
  }
}
