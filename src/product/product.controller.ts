import { Body, Controller, Post, Get, Delete, Put , Param} from '@nestjs/common';
import { CreateProductDTO , UpdateProductDTO } from './dto/index';
import { ProductService } from './product.service'
@Controller('product')

export class ProductController {
    constructor(private productService:ProductService){
    }
    @Post()
    async createProduct(@Body() createProductDTO:CreateProductDTO){
    return await this.productService.createProduct(createProductDTO)
    }
    @Get()
    async getProducts(){
    return await this.productService.getProducts()
    }
    @Get('/:productID')
    async getProductByID(@Param('productID')productID){
    return await this.productService.getOneProduct(productID)
    }
    @Delete('/:productID')
    async deleteProductByID(@Param('productID')productID){
        return await this.productService.deleteProduct(productID)
    }
    @Put('/:productID')
    async updateProductByID(@Body()newData:UpdateProductDTO,@Param('productID')productID){
        return await this.productService.updateProduct(productID,newData)
    }
}
