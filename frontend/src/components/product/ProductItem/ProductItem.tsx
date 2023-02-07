import {
    Box,
    Checkbox,
    FormControlLabel,
    Radio,
    Switch,
    Typography,
} from '@mui/material';
import { Product } from '../../../api/products';
import { ProductItemHeader } from './ProductItemHeader';

type ProductItemProps = {
    product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
    const { action, active, amount, id, linked, selectedColor, type } = product;

    const controlProps = (item: string) => ({
        checked: false,
        onChange: () => {},
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <Box
            sx={{
                flexGrow: '1',
                flexBasis: '0',
                minWidth: '220px',
            }}
        >
            <ProductItemHeader
                action={action}
                amount={amount}
                selectedColor={selectedColor}
                type={type}
            />
            <Box>
                <FormControlLabel
                    checked={linked}
                    control={<Checkbox />}
                    label="Link to Public Profile"
                    labelPlacement="start"
                />

                <Typography variant="body1" color="text.primary">
                    Badge colour
                </Typography>
                <Radio {...controlProps('a')} />
                <Radio {...controlProps('b')} color="secondary" />
                <Radio {...controlProps('c')} color="success" />
                <Radio {...controlProps('d')} color="default" />
                <FormControlLabel
                    checked={active}
                    control={<Switch color="primary" />}
                    label="Activate badge"
                    labelPlacement="start"
                />
            </Box>
        </Box>
    );
}
