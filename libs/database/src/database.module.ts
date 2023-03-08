import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigService} from '@nestjs/config';
import { UserSchema, User, Product, ProductSchema} from './schemas/index';


@Module({
  imports:[
    MongooseModule.forFeature([{
      name:User.name,schema:UserSchema
    },
    {
      name:Product.name,schema:ProductSchema
    }
    ]),
    MongooseModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: config.get<string>('MONGO_URI'),
    })
  })],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
