import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Document} from "mongoose";

@Schema({timestamps:true})
export class Product{
    @Prop({unique:true,})
    title:string
    @Prop()
    description:string
    @Prop()
    thumbnail:string
    @Prop()
    price:number
}
export type ProductDocument = Product & Document;
export const ProductSchema=SchemaFactory.createForClass(Product)


