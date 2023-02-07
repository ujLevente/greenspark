import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../api/products';
import { ProductItem } from './ProductItem';

export function ProductList() {
    const { data } = useQuery({
        queryKey: ['asd'],
        queryFn: fetchProducts,
    });

    if (!data) return null;

    return (
        <Box>
            {data.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </Box>
    );
}
