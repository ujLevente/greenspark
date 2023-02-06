import { NotFoundException } from '@nestjs/common';
import { Product } from './product-provider';
import { ProductProviderMemory } from './product-provider-memory';

describe('ProductProviderMemory', () => {
    let productProviderMemory: ProductProviderMemory;

    beforeEach(() => {
        productProviderMemory = new ProductProviderMemory();
    });

    describe('findAll', () => {
        it('should return a list of products', () => {
            const result = productProviderMemory.findAll();
            expect(result).toHaveLength(3);
            expect(result[0]).toHaveProperty('id', 1);
            expect(result[1]).toHaveProperty('type', 'trees');
            expect(result[2]).toHaveProperty('amount', 100);
        });
    });

    describe('updateOne', () => {
        const updateProps: Pick<
            Product,
            'active' | 'linked' | 'selectedColor'
        > = {
            active: true,
            linked: false,
            selectedColor: 'blue',
        };

        it('should return the updated product with the specified id', () => {
            const result = productProviderMemory.updateOne(2, updateProps);
            expect(result).toHaveProperty('id', 2);
            expect(result).toHaveProperty('active', true);
            expect(result).toHaveProperty('linked', false);
            expect(result).toHaveProperty('selectedColor', 'blue');
        });

        it('should throw NotFoundException if the product does not exist', () => {
            const fn = () => productProviderMemory.updateOne(4, updateProps);
            expect(fn).toThrowError(NotFoundException);
        });
    });
});
