import { Product, ProductProvider } from './ProductProvider';

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

    updateOne(id: number) {
        const product = this.products.find((product) => product.id === id);
        return { ...product };
    }
}
