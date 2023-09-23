import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Customer } from './customer.entity';

export enum ROLE_NAME {
  'AUTHOR' = 'author',
  'ADMIN' = 'admin',
}

export class Role {
  @IsNotEmpty()
  name!: ROLE_NAME;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Customer)
  customers?: Customer[];
}
