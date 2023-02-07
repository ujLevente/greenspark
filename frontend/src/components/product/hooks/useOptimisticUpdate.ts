import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Product, updateProduct } from '../../../api/products';

export function useOptimisticUpdate() {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: updateProduct,
        onMutate: async (newProductData) => {
            // Cancel any outgoing refetches
            // (so they don't overwrite the optimistic update)
            await queryClient.cancelQueries({
                queryKey: ['products'],
            });

            // Snapshot the previous value
            const products = queryClient.getQueryData<Product[]>(['products']);

            const optimisticlyUpdatedProducts = products?.map((product) => {
                if (product.id === newProductData.id) {
                    return {
                        ...product,
                        ...newProductData,
                    };
                }

                return product;
            });

            // Optimistically update to the new value
            queryClient.setQueryData(['products'], optimisticlyUpdatedProducts);

            return { previousProducts: products };
        },
        // on error set back to previous snapshot
        onError: (_, __, context) => {
            if (context?.previousProducts) {
                queryClient.setQueryData(
                    ['products'],
                    context.previousProducts
                );
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['products'],
            });
        },
    });

    return { mutate };
}
