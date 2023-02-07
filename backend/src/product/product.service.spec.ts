import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { productStub } from '../../test/stubs/product-stub';
import { Product, ProductProvider } from '../data/product-provider';
import { ProductService } from './product.service';

describe('ProductService', () => {
    let service: ProductService;
    const mockProductProvider: jest.Mocked<ProductProvider> = {
        findAll: jest.fn(() => [productStub(1), productStub(2)]),
        findOne: jest.fn((id: number) => {
            if (id > 1) {
                throw new NotFoundException();
            }
            return productStub(1);
        }),
        updateOne: jest.fn(
            (
                id: number,
                dto: Pick<Product, 'active' | 'linked' | 'selectedColor'>,
            ) => {
                if (id > 1) {
                    throw new NotFoundException();
                }
                return { ...productStub(1), ...dto, id };
            },
        ),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductService,
                { provide: 'ProductProvider', useValue: mockProductProvider },
            ],
        }).compile();

        service = module.get<ProductService>(ProductService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        it('should return a list of products', () => {
            const result = service.findAll();
            expect(result).toHaveLength(2);
        });
    });

    describe('findOne', () => {
        it('should return the product with the specified id', () => {
            const result = service.findOne(1);
            expect(result).toHaveProperty('id', 1);
            expect(result).toHaveProperty('type', 'plastic bottles');
        });

        it('should throw NotFoundException if the product does not exist', () => {
            const fn = () => service.findOne(2);
            expect(fn).toThrowError(NotFoundException);
        });
    });

    describe('updateOne', () => {
        const updateProps: Partial<
            Pick<Product, 'active' | 'linked' | 'selectedColor'>
        > = {
            active: false,
            linked: false,
            selectedColor: 'green',
        };

        it('should return the updated product with the specified id', () => {
            const result = service.updateOne(1, updateProps);
            expect(result).toHaveProperty('id', 1);
            expect(result).toHaveProperty('active', false);
            expect(result).toHaveProperty('linked', false);
            expect(result).toHaveProperty('selectedColor', 'green');
        });

        it('should throw NotFoundException if the product does not exist', () => {
            const fn = () => service.updateOne(2, updateProps);
            expect(fn).toThrowError(NotFoundException);
        });
    });
});
