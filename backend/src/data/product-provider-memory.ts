import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, ProductProvider } from './product-provider';

@Injectable()
export class ProductProviderMemory implements ProductProvider {
    private readonly products: Product[] = [
        {
            id: 1,
            type: 'plastic bottles',
            amount: 100,
            action: 'collects',
            active: true,
            linked: false,
            selectedColor: 'blue',
        },
        {
            id: 2,
            type: 'trees',
            amount: 10,
            action: 'plants',
            active: false,
            linked: true,
            selectedColor: 'green',
        },
        {
            id: 3,
            type: 'carbon',
            amount: 100,
            action: 'offsets',
            active: false,
            linked: false,
            selectedColor: 'beige',
        },
    ];

    findAll() {
        return [...this.products];
    }

    findOne(id: number) {
        const product = this.products.find((product) => product.id === id);

        if (!product) {
            throw new NotFoundException(`Product with id: ${id} not found`);
        }

        return product;
    }

    updateOne(
        id: number,
        updateProps: Partial<
            Pick<Product, 'active' | 'linked' | 'selectedColor'>
        >,
    ) {
        const productIndex = this.products.findIndex(
            (product) => product.id === id,
        );

        if (productIndex === -1) {
            throw new NotFoundException(`Product with id: ${id} not found`);
        }

        const updatedProduct = {
            ...this.products[productIndex],
            ...updateProps,
        };

        this.products[productIndex] = updatedProduct;

        return { ...updatedProduct };
    }
}
