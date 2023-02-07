import { Components } from '@mui/material';

export const components: Components = {
    MuiCheckbox: {
        styleOverrides: {
            root: {
                '&:not(.Mui-checked) ': {
                    transition: 'color 0.1s',
                    '&:hover': {
                        color: '#AFC6BD',
                    },
                },
            },
        },
    },
};
