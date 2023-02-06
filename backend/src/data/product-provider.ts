export type ProductColor = 'white' | 'black' | 'blue' | 'green' | 'beige';

export type Product = {
    id: number;
    type: 'carbon' | 'plastic bottles' | 'trees';
    amount: number;
    action: 'collects' | 'plants' | 'offsets';
    active: boolean;
    linked: boolean;
    selectedColor: ProductColor;
};

export interface ProductProvider {
    findAll: () => Product[];
    updateOne: (
        arg0: number,
        arg1: Pick<Product, 'active' | 'linked' | 'selectedColor'>,
    ) => Product;
}
