import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { DuplicatedVideo } from 'src/schema/duplicated-videos.schema';

@Injectable()
export class DuplicatedVideoService {
  constructor(
    @InjectModel(DuplicatedVideo.name)
    private videoModel: Model<DuplicatedVideo>,
  ) {}

  async getVideoList(): Promise<DuplicatedVideo[]> {
    console.log('get video list service');
    return this.videoModel.find().exec();
  }
}
