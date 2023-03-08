import { Body, Controller, Post, Get, Delete, Put , Param} from '@nestjs/common';
import { UserDTO , UpdateUserDTO } from './dto/index';
import { UserService } from './user.service'
@Controller('user')

export class UserController {
    constructor(private userService:UserService){
    }
    @Get()
    async getUsers():Promise<UserDTO[]>{
    return await this.userService.getUsers()
    }
    @Get('/:userID')
    async getUserByID(@Param('userID')userID):Promise<UserDTO>{
    return await this.userService.getOneUser(userID)
    }
    @Delete('/:userID')
    async deleteUserByID(@Param('userID')userID):Promise<Object>{
        return await this.userService.deleteUser(userID)
    }
    @Put('/:userID')
    async updateProductByID(@Body()newData:UpdateUserDTO,@Param('userID')userID):Promise<UserDTO>{
        return await this.userService.updateUser(userID,newData)
    }
}