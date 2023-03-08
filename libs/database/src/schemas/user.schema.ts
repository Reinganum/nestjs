import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Document, SchemaTypes, Types} from "mongoose";

@Schema({timestamps:true})
export class User{
    @Prop()
    firstname:string
    @Prop()
    lastname:string
    @Prop({unique:true})
    email:string
    @Prop()
    password:string
}
export type UserDocument = User & Document;
export const UserSchema=SchemaFactory.createForClass(User)