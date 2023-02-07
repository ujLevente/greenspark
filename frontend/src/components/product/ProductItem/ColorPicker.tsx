import { Box, styled, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { COLOR_LOOKUP, SELECTABLE_COLORS } from '../../../contants';

type ColorPickerProps = {
    onChange: (event: React.ChangeEvent, value: boolean | string) => void;
    value: string;
};

export function ColorPicker({ onChange, value }: ColorPickerProps) {
    return (
        <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography>Badge colour</Typography>
            <RadioGroup
                aria-labelledby="color-picker"
                value={value}
                name="selectedColor"
                onChange={onChange}
            >
                <Box>
                    {SELECTABLE_COLORS.map((colorName) => (
                        <Radio
                            key={colorName}
                            disableRipple
                            checkedIcon={<CustomCheckedIcon />}
                            icon={<CustomIcon />}
                            value={colorName}
                            sx={{
                                p: '2px',
                                '& span': {
                                    backgroundColor: COLOR_LOOKUP[colorName],
                                },
                            }}
                        />
                    ))}
                </Box>
            </RadioGroup>
        </FormControl>
    );
}

const CustomIcon = styled('span')(({ theme }) => ({
    borderRadius: '0',
    width: theme.spacing(2),
    height: theme.spacing(2),
    backgroundColor: '#2E3A8C',
    transition: 'opacity 0.3s',
    'input:hover ~ &': {
        opacity: '0.8',
    },
}));

const CustomCheckedIcon = styled(CustomIcon)(({ theme }) => ({
    border: `1.5px solid ${theme.palette.divider}`,
}));
