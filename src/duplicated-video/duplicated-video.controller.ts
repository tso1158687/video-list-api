import { Controller, Get } from '@nestjs/common';
import { DuplicatedVideoService } from './duplicated-video.service';
import { DuplicatedVideo } from 'src/schema/duplicated-videos.schema';

@Controller('duplicated-video')
export class DuplicatedVideoController {
  constructor(private duplicatedVideoService: DuplicatedVideoService) {}

  @Get()
  getVideoList(): Promise<DuplicatedVideo[]> {
    return this.duplicatedVideoService.getVideoList();
  }
}
