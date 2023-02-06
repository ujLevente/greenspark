export type Product = {
    id: number;
    type: 'carbon' | 'plastic bottles' | 'trees';
    amount: number;
    action: 'collects' | 'plants' | 'offsets';
    active: boolean;
    linked: boolean;
    selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige';
};

export interface ProductProvider {
    findAll: () => Product[];
    updateOne: (arg: number) => Product;
}
