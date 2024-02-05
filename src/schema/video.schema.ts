import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VideoDocument = HydratedDocument<Video>;

@Schema({ collection: 'video' })
export class Video {
  @Prop({ required: true })
  file_name: string;

  @Prop({ required: true })
  file_path: string[];
}

export const VideoSchema = SchemaFactory.createForClass(Video);
