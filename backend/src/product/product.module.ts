import { Module } from '@nestjs/common';
import { ProductProviderMemory } from 'src/data/product-provider-memory';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    controllers: [ProductController],
    providers: [
        ProductService,
        { provide: 'ProductProvider', useClass: ProductProviderMemory },
    ],
})
export class ProductModule {}
