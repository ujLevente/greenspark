import { Test, TestingModule } from '@nestjs/testing';
import { ProductProvider } from '../data/product-provider';
import { productStub } from '../test/stubs/product-stub';
import { ProductService } from './product.service';

describe('ProductService', () => {
    let service: ProductService;
    const mockProductProvider: jest.Mocked<ProductProvider> = {
        findAll: jest.fn(() => [productStub(1), productStub(2)]),
        updateOne: jest.fn(),
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
});
