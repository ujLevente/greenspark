import { Box } from '@mui/material';
import { Product } from '../../api/products';

type ProductItemProps = {
    product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
    const { action, active, amount, id, linked, selectedColor, type } = product;
    return <Box>{id}</Box>;
}
