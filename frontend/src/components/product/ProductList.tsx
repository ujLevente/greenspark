import { Box, Card, Divider, styled, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../api/products';
import { ProductItem } from './ProductItem';

export function ProductList() {
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    if (!data) return null;

    return (
        <ContainerCard>
            <Typography color="common.black" variant="h3">
                Per product widgets
            </Typography>
            <Divider sx={{ mt: 1.5, mb: 2.5, height: '2px' }} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 7.25,
                }}
            >
                {data.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </Box>
        </ContainerCard>
    );
}

const ContainerCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(4),
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: `0px 42px 76px rgba(0, 0, 0, 0.05), 
    0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963), 
    0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704), 
    0px 8.4px 12.35px rgba(0, 0, 0, 0.025), 
    0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296), 
    0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037)`,
}));
