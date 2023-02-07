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
                '&:hover': {
                    background: '#afc6bd80',
                },
            },
        },
    },
    MuiSwitch: {
        styleOverrides: {
            root: {
                alignItems: 'center',
                height: '20px',
                width: '40px',
                boxSizing: 'initial',

                '& .MuiSwitch-switchBase': {
                    left: '6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    padding: '6px',

                    '&.Mui-checked': {
                        transform: 'translateY(-50%) translateX(20px)',
                    },
                    '&.Mui-checked:hover, &:hover': {
                        background: '#afc6bd80',
                    },
                    '&.Mui-checked + .MuiSwitch-track': {
                        opacity: 1,
                    },
                    '& + .MuiSwitch-track': {
                        boxSizing: 'border-box',
                        borderRadius: '30px',
                        background: '#F9F9F9',
                        border: '0.6px solid #AFC6BD',
                        boxShadow:
                            'inset 0px 1.02541px 6.83608px rgba(0, 0, 0, 0.15)',
                    },
                    '.MuiSwitch-thumb': {
                        border: '0.6px solid #F2EBDB',
                        height: '20px',
                        width: '20px',
                        background: '#F9F9F9',
                    },
                },
            },
        },
    },
};
