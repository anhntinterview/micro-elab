import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Post } from './post.entity';

export enum TAG_NAME {
  'CUSTOMER' = 'customer',
  'POST' = 'post',
}

export class Tag {
  @IsString()
  @IsNotEmpty()
  name!: TAG_NAME;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Post)
  posts?: Array<Post>;
}
