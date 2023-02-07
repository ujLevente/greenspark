import { ProductColor } from './api/products';

export const LIGHT_COLORS = ['white', 'beige'];

export const SELECTABLE_COLORS: ProductColor[] = [
    'blue',
    'green',
    'beige',
    'white',
    'black',
];

export const COLOR_LOOKUP: Record<ProductColor, string> = {
    beige: '#F2EBDB',
    black: '#212121',
    blue: '#2E3A8C',
    green: '#3B755F',
    white: 'white',
};
