import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { MongoRepository } from './repository/mongo.repository';
import { User } from './schemas/user.schema'
import { Product } from './schemas/product.schema'
@Injectable()
export class DatabaseService {
    constructor(
        @InjectModel(User.name)
        private UserRepository:Model<User>,
        @InjectModel(Product.name)
        private ProductRepository:Model<Product>
    ){}
    user():MongoRepository<User>{
        return new MongoRepository<User>(this.UserRepository)
    }
    product():MongoRepository<Product>{
        return new MongoRepository(this.ProductRepository)
    }
}
