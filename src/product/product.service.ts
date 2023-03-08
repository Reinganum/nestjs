import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface'
import { CreateProductDTO , UpdateProductDTO } from './dto'
import { DatabaseService } from 'app/database';

@Injectable()
export class ProductService {
    constructor( private database:DatabaseService){}
    async getProducts():Promise<Product[]>{
        return await this.database.product().getAll()
    }
    async getOneProduct(productID:string):Promise<Product>{
        return await this.database.product().getOneByID(productID)
    }
    async createProduct(createProductDTO:CreateProductDTO):Promise<Product>{
        return await this.database.product().createObject(createProductDTO)
    }
    async updateProduct(productID:string,updateData:UpdateProductDTO):Promise<Product>{
        return await this.database.product().update(productID, updateData)
    }
    async deleteProduct(productID:string):Promise<Object>{
        return await this.database.product().deleteByID(productID)
    }
}
