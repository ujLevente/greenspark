import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductList } from './features/product/ProductList';
import { theme } from './theme';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProductList />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
