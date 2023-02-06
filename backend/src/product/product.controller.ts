import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Put(':id')
    updateOne(
        @Param() { id }: { id: any },
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productService.updateOne(Number(id), updateProductDto);
    }
}
