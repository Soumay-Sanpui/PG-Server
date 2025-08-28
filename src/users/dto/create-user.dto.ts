import {
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { ROLE } from "../entities/user.entity";

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: "Full name must be at least 2 characters long" })
  fullName: string;

  @IsString()
  @MinLength(3, { message: "Username must be at least 3 characters long" })
  username: string;

  @IsMobilePhone()
  phoneNumber: string;

  @IsEmail({}, { message: "Please provide a valid email address" })
  email: string;

  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  password: string;

  @IsOptional()
  @IsEnum(ROLE, { message: "Role must be either TENANT or PG-OWNER" })
  role?: ROLE;
}
