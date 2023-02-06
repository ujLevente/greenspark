import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { ProductColor } from 'src/data/product-provider';

export class UpdateProductDto {
    @IsBoolean()
    @IsOptional()
    active?: boolean;

    @IsBoolean()
    @IsOptional()
    linked?: boolean;

    @IsEnum(['white', 'black', 'blue', 'green', 'beige'])
    @IsOptional()
    selectedColor?: ProductColor;
}
