import { axiosInstance } from '../axios';

export type ProductColor = 'white' | 'black' | 'blue' | 'green' | 'beige';

export type Product = {
    id: number;
    type: 'carbon' | 'plastic bottles' | 'trees';
    amount: number;
    action: 'collects' | 'plants' | 'offsets';
    active: boolean;
    linked: boolean;
    selectedColor: ProductColor;
};

export type UpdateProductDto = Partial<
    Partial<Pick<Product, 'active' | 'linked' | 'selectedColor'>>
>;

export async function fetchProducts() {
    const response = await axiosInstance.get<Product[]>('products');

    return response.data;
}

export async function updateProduct({
    id,
    ...updateProductDto
}: { id: number } & UpdateProductDto) {
    const response = await axiosInstance.put<Product>(
        `products/${id}`,
        updateProductDto
    );

    return response.data;
}
