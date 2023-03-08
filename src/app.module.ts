import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { GatewayModule } from './gateway/gateway.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    AuthModule,
    ProductModule,
    GatewayModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'),
      })
    }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
