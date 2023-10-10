import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Tag } from './tag.entity';

export class Post {
  @IsNotEmpty()
  @IsString()
  id!: string;

  @IsNotEmpty()
  @IsString()
  slug!: string;

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  coverImage!: string;

  @IsNotEmpty()
  @IsString()
  excerpt!: string;

  @IsNotEmpty()
  @IsString()
  ogImage!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(500, { message: 'Content must be at least 500 characters long' })
  content!: string;

  @IsDate()
  created_at!: Date;

  @IsDate()
  updated_at!: Date;

  @IsString()
  created_by!: string;

  @IsNotEmpty()
  updated_by!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Tag)
  tags?: Array<Tag>;
}

export class PostBodyDataValidation {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  coverImage!: string;

  @IsString()
  ogImage!: string;

  @IsNotEmpty()
  @IsString()
  content!: string;

  @IsNotEmpty()
  @IsString()
  customerId!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Tag)
  tags?: Array<Tag>;
}