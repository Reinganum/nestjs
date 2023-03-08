import { IsOptional, IsEmail, IsNumber, IsString } from "class-validator";

export class UpdateUserDTO{
    @IsOptional()
    @IsString()
    readonly firstname?:string;
    @IsOptional()
    @IsString()
    readonly lastname?:string;
    @IsOptional()
    @IsEmail()
    readonly email?:string;
    @IsOptional()
    @IsString()
    readonly password?:string;

}