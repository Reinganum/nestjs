import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDTO{
    @IsString()
    readonly firstname:string
    @IsString()
    readonly lastname:string
    @IsEmail()
    @IsNotEmpty()
    readonly email:string
    @IsString()
    @IsNotEmpty()
    readonly password:string
}