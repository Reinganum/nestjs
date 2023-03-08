import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'app/database';
import { UserDTO, UpdateUserDTO } from './dto/index';

@Injectable({})
export class UserService {
    constructor( private database:DatabaseService){}
    async getUsers():Promise<UserDTO[]>{
        return await this.database.user().getAll()
    }
    async getOneUser(productID:string):Promise<UserDTO>{
        return await this.database.user().getOneByID(productID)
    }
    async updateUser(productID:string,updateData:UpdateUserDTO):Promise<UserDTO>{
        return await this.database.user().update(productID, updateData)
    }
    async deleteUser(productID:string):Promise<Object>{
        return await this.database.user().deleteByID(productID)
    }
}

