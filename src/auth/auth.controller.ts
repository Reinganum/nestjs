import { Controller, Get, Post, Body, UseGuards, Request} from "@nestjs/common/";
import { AuthService } from "./auth.service";
import { AuthDTO, RegisterDTO } from "./dto";
import { LocalAuthGuard } from './local-auth.guard'
import { JwtAuthGuard } from "./jwt-auth.guard";


@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){
    }
    @Post('register')
    register(@Body()registerDTO:RegisterDTO){
        return this.authService.register(registerDTO)
    }
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
    return req.user;
    }
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
