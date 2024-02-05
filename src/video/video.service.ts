import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoDto } from 'src/dto/video.dto';
import { Video } from 'src/schema/video.schema';

@Injectable()
export class VideoService {
  constructor(@InjectModel(Video.name) private videoModel: Model<Video>) {}

  async getVideoList(): Promise<Video[]> {
    console.log('get video list service');
    return this.videoModel.find().exec();
  }

  async findByFilename(query: string): Promise<Video[]> {
    return this.videoModel
      .find({ file_name: { $regex: query, $options: 'i' } })
      .exec();
  }

  async create(createCatDto: VideoDto): Promise<Video> {
    const createdVideo = new this.videoModel(createCatDto);
    return createdVideo.save();
  }
}
