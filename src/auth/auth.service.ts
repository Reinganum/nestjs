import { Injectable, UnauthorizedException} from "@nestjs/common";
import { AuthDTO, RegisterDTO } from "./dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { DatabaseService } from "app/database";

@Injectable()
export class AuthService{
    constructor(
        private database:DatabaseService,
        private jwtService: JwtService
    ){}
    async register(dto:RegisterDTO):Promise<Object>{
        const {firstname,lastname,email,password,}=dto
        const hashedPass=await bcrypt.hash(password,10)
        const user=await this.database.user().createObject({firstname,lastname,email,password:hashedPass})
        return user
    }
    async validateUser(email:string,password:string):Promise<Object> {
        const user=await this.database.user().findOne({email:email})
        if (!user) throw new UnauthorizedException();
        const passwordMatches=await bcrypt.compare(password,user.password)
        if(!passwordMatches) throw new UnauthorizedException();
        const token=this.jwtService.sign({userId:user._id,username:user.firstname,lastname:user.lastname,email:user.email})
        console.log(token)
        return user
      }
}