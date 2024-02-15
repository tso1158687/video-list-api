import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DuplicatedVideoDocument = HydratedDocument<DuplicatedVideo>;

@Schema({ collection: 'duplicated_videos' })
export class DuplicatedVideo {
  @Prop({ required: true })
  file_name: string;

  @Prop({ required: true })
  file_path: string[];
}

export const DuplicatedVideoSchema =
  SchemaFactory.createForClass(DuplicatedVideo);
