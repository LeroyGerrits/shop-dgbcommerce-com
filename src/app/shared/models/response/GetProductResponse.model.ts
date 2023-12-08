import { Product } from "../Product.model";

export class GetProductResponse {
    Product!: Product;
    CategoryIds?: string[];
}