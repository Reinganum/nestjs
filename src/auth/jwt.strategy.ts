import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config:ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET')
    });
  }

  async validate(payload: any) {
    return { userId: payload.userId,firstname:payload.username,lastname:payload.lastname,email:payload.email};
  }
}