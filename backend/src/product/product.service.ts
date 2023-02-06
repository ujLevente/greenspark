import {
    BadRequestException,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
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

    updateOne(id: number, updateProductDto: UpdateProductDto) {
        try {
            return this.productProvider.updateOne(id, updateProductDto);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new BadRequestException(error.message);
            }
            throw error;
        }
    }
}
