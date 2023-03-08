import {IsNotEmpty, IsString} from "class-validator";
export class MessageDTO{
    @IsString()
    @IsNotEmpty()
    readonly message:string
    @IsString()
    @IsNotEmpty()
    readonly nickname:string
}