import { IsOptional, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateProductDTO{
    @IsOptional()
    @IsString()
    readonly title?:string;
    @IsOptional()
    @IsString()
    readonly description?:string;
    @IsOptional()
    @IsString()
    readonly thumbnail?:string;
    @IsOptional()
    @IsNumber()
    readonly price?:number;
    @IsOptional()
    readonly createdAt:Date;
}