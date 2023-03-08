import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDTO{
    @IsString()
    @IsNotEmpty()
    readonly title:string;
    @IsString()
    @IsNotEmpty()
    readonly description:string;
    @IsString()
    @IsNotEmpty()
    readonly thumbnail:string;
    @IsNumber()
    @IsNotEmpty()
    readonly price:number;
    readonly createdAt:Date;
}