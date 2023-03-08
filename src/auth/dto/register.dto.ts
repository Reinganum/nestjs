import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDTO{
    @IsString()
    @IsNotEmpty()
    firstname:string
    @IsString()
    @IsNotEmpty()
    lastname:string
    @IsEmail()
    @IsNotEmpty()
    email:string
    @IsString()
    @IsNotEmpty()
    password:string
}