import { Box, Checkbox, FormControlLabel, Switch } from '@mui/material';
import { Product } from '../../../api/products';
import { useOptimisticUpdate } from '../hooks/useOptimisticUpdate';
import { ColorPicker } from './ColorPicker';
import { ProductItemHeader } from './ProductItemHeader';

type ProductItemProps = {
    product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
    const { action, active, amount, id, linked, selectedColor, type } = product;
    const { mutate } = useOptimisticUpdate();

    const handChange = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        event: React.ChangeEvent<any>,
        value: boolean | string
    ) => {
        const dto = { id, [event.target.name]: value };
        mutate(dto);
    };

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
                    onChange={handChange}
                    name="linked"
                    checked={linked}
                    control={
                        <Checkbox
                            sx={{
                                marginRight: '-9px',
                            }}
                        />
                    }
                    label="Link to Public Profile"
                    labelPlacement="start"
                    sx={{
                        margin: 0,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                />
                <ColorPicker onChange={handChange} value={selectedColor} />
                <FormControlLabel
                    onChange={handChange}
                    name="active"
                    checked={active}
                    control={
                        <Switch
                            color="primary"
                            sx={{
                                marginRight: '-6px',
                            }}
                        />
                    }
                    label="Activate badge"
                    labelPlacement="start"
                    value={active}
                    sx={{
                        margin: 0,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                />
            </Box>
        </Box>
    );
}
