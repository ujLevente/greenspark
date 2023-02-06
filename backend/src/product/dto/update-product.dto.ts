import { IsBoolean, IsEnum } from 'class-validator';
import { ProductColor } from 'src/data/product-provider';

export class UpdateProductDto {
    @IsBoolean()
    active: boolean;

    @IsBoolean()
    linked: boolean;

    @IsEnum(['white', 'black', 'blue', 'green', 'beige'])
    selectedColor: ProductColor;
}
