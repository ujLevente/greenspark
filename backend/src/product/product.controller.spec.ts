import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { productStub } from '../../test/stubs/product-stub';
import { Product } from '../data/product-provider';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
    let controller: ProductController;
    const mockProductService = {
        findAll: jest.fn(() => [productStub(1), productStub(2)]),
        updateOne: jest.fn(
            (
                id: number,
                dto: Pick<Product, 'active' | 'linked' | 'selectedColor'>,
            ) => {
                if (id === 2) {
                    throw new NotFoundException();
                }
                return { ...productStub(1), ...dto, id };
            },
        ),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductController],
            providers: [ProductService],
        })
            .overrideProvider(ProductService)
            .useValue(mockProductService)
            .compile();

        controller = module.get<ProductController>(ProductController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findAll', () => {
        it('should return a list of products', () => {
            const result = controller.findAll();
            expect(result).toHaveLength(2);
        });
    });

    describe('updateOne', () => {
        const updateProps: Pick<
            Product,
            'active' | 'linked' | 'selectedColor'
        > = {
            active: false,
            linked: false,
            selectedColor: 'green',
        };

        it('should return the updated product with the specified id', () => {
            const result = controller.updateOne({ id: 1 }, updateProps);
            expect(result).toHaveProperty('id', 1);
            expect(result).toHaveProperty('active', false);
            expect(result).toHaveProperty('linked', false);
            expect(result).toHaveProperty('selectedColor', 'green');
        });

        it('should throw NotFoundException if the product does not exist', () => {
            const fn = () => controller.updateOne({ id: 2 }, updateProps);
            expect(fn).toThrowError(NotFoundException);
        });
    });
});
