import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Put,
} from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),
        )
        id: number,
    ) {
        return this.productService.findOne(id);
    }

    @Put(':id')
    updateOne(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),
        )
        id: number,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productService.updateOne(Number(id), updateProductDto);
    }
}
