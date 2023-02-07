import { Inject, Injectable } from '@nestjs/common';
import { ProductProvider } from 'src/data/product-provider';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @Inject('ProductProvider')
        private readonly productProvider: ProductProvider,
    ) {}

    findAll() {
        return this.productProvider.findAll();
    }

    findOne(id: number) {
        return this.productProvider.findOne(id);
    }

    updateOne(id: number, updateProductDto: UpdateProductDto) {
        return this.productProvider.updateOne(id, updateProductDto);
    }
}
