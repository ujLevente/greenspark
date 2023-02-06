import { Inject, Injectable } from '@nestjs/common';
import { ProductProvider } from 'src/data/product-provider';

@Injectable()
export class ProductService {
    constructor(
        @Inject('ProductProvider')
        private readonly productProvider: ProductProvider,
    ) {}

    findAll() {
        return this.productProvider.findAll();
    }
}
