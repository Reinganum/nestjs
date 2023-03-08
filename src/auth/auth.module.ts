import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config/dist';
import { DatabaseModule } from 'app/database';
import { LocalStrategy } from './auth.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports:[
        DatabaseModule,
        PassportModule,
        JwtModule.registerAsync({
            inject:[ConfigService],
            useFactory:(config:ConfigService)=>{
                return {
                    secret:config.get<string>('JWT_SECRET'),
                    signOptions: {
                        expiresIn:config.get<string>('JWT_EXPIRY')}
                }
            }
        }),
        ],
    controllers:[AuthController],
    providers:[AuthService, LocalStrategy,JwtStrategy],
})
export class AuthModule{}
