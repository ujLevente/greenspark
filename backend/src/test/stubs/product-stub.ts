import { Product } from 'src/data/product-provider';

export const productStub = (id = 1): Product => ({
    id,
    type: 'plastic bottles',
    amount: 100,
    action: 'collects',
    active: true,
    linked: false,
    selectedColor: 'blue',
});
