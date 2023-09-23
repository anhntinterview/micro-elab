import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Customer } from './customer.entity';
import { Type } from 'class-transformer';

export class CustomerAddress {
  @IsNotEmpty()
  @IsString()
  address_line1!: string;

  @IsNotEmpty()
  @IsString()
  address_line2!: string;

  @IsNumber()
  @IsNotEmpty()
  postal_code!: string;

  @IsNotEmpty()
  @IsString()
  country!: string;

  @IsNotEmpty()
  @IsString()
  city!: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  phone_number!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Customer)
  customers?: Customer[];
}
