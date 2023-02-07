import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { Product } from '../src/data/product-provider';
import { ProductProviderMemory } from '../src/data/product-provider-memory';
import { ProductController } from '../src/product/product.controller';
import { ProductService } from '../src/product/product.service';

describe('ProductController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            controllers: [ProductController],
            providers: [
                ProductService,
                { provide: 'ProductProvider', useClass: ProductProviderMemory },
            ],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/products (GET)', () => {
        return request(app.getHttpServer())
            .get('/products')
            .expect(200)
            .expect((res) => {
                expect(res.body).toHaveLength(3);
            });
    });

    describe('/products/:id (GET)', () => {
        it('should return the product given a valid id', () => {
            return request(app.getHttpServer())
                .put('/products/1')
                .expect(200)
                .expect((res) => {
                    expect(res.body.id).toBe(1);
                    expect(res.body.active).toBe(true);
                    expect(res.body.linked).toBe(false);
                    expect(res.body.selectedColor).toBe('blue');
                });
        });

        it('should return 404 for an invalid id', () => {
            return request(app.getHttpServer()).put('/products/4').expect(404);
        });

        it('should return 406 if id is not a number', () => {
            return request(app.getHttpServer())
                .put('/products/notANumber')
                .expect(406);
        });
    });

    describe('/products/:id (PUT)', () => {
        const updateProps: Partial<
            Pick<Product, 'active' | 'linked' | 'selectedColor'>
        > = {
            active: false,
            linked: false,
            selectedColor: 'white',
        };

        it('should return the updated product given a valid id', () => {
            return request(app.getHttpServer())
                .put('/products/1')
                .send(updateProps)
                .expect(200)
                .expect((res) => {
                    expect(res.body.id).toBe(1);
                    expect(res.body.active).toBe(false);
                    expect(res.body.linked).toBe(false);
                    expect(res.body.selectedColor).toBe('white');
                });
        });

        it('should return 404 for an invalid id', () => {
            return request(app.getHttpServer())
                .put('/products/4')
                .send(updateProps)
                .expect(404);
        });

        it('should return 406 if id is not a number', () => {
            return request(app.getHttpServer())
                .put('/products/notANumber')
                .send(updateProps)
                .expect(406);
        });
    });
});
