import { Box, Typography } from '@mui/material';
import { Product } from '../../../api/products';
import { COLOR_LOOKUP, LIGHT_COLORS } from '../../../contants';

type ProductItemHeaderProps = Pick<
    Product,
    'amount' | 'selectedColor' | 'type' | 'action'
>;

export function ProductItemHeader({
    amount,
    selectedColor,
    type,
    action,
}: ProductItemHeaderProps) {
    const testColor = LIGHT_COLORS.includes(selectedColor)
        ? 'text.primary'
        : 'secondary.main';

    const img = LIGHT_COLORS.includes(selectedColor)
        ? '/greenspark_green.svg'
        : '/greenspark_light.svg';

    return (
        <Box
            sx={{
                bgcolor: COLOR_LOOKUP[selectedColor],
                display: 'flex',
                alignItems: 'center',
                p: 1.25,
                borderRadius: '6px',
            }}
        >
            <img src={img} alt="green spark" />
            <Box sx={{ ml: 1.5 }}>
                <Typography variant="body2" color={testColor} sx={{ mb: 0.5 }}>
                    This product {action}
                </Typography>
                <Typography variant="h4" color={testColor}>
                    {`${amount}${type === 'carbon' ? 'kgs of' : ''} ${type}`}
                </Typography>
            </Box>
        </Box>
    );
}
