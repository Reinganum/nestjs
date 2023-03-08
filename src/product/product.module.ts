import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { DatabaseModule } from 'app/database';

@Module({
  imports:[
    DatabaseModule,
    ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
