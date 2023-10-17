import { Type } from 'class-transformer';
import { CustomerAddress } from './customer-address.entity';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Role } from './role.entity';
import { Tag } from './tag.entity';

export class Customer {
  @IsNotEmpty()
  @IsString()
  id!: string;

  @IsNotEmpty()
  @IsString()
  username!: string;

  @IsNotEmpty()
  @IsString()
  avatar!: string;

  @IsNotEmpty()
  @IsString()
  first_name!: string;

  @IsNotEmpty()
  @IsString()
  last_name!: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  phone_number!: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  hash!: string;

  @IsNotEmpty()
  @IsString()
  salt!: string;

  @IsBoolean()
  @IsNotEmpty()
  @IsNotEmpty()
  active!: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CustomerAddress)
  addresses?: Array<CustomerAddress>;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CustomerAddress)
  roles?: Role[];
}

export class CustomerBodyDataValidation {
  @IsNotEmpty()
  @IsString()
  username?: string;

  @IsNotEmpty()
  @IsString()
  first_name?: string;

  @IsNotEmpty()
  @IsString()
  last_name?: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  phone_number!: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message: 'Password must contain at least one uppercase letter, one number, and one special character',
  })
  password!: string;

  @IsBoolean()
  @IsNotEmpty()
  @IsNotEmpty()
  active!: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CustomerAddress)
  addresses?: Array<CustomerAddress>;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Role)
  roles?: Array<Role>;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Tag)
  tags!: Array<Tag>;
}