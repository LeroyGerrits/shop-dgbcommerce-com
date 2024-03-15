export class ShoppingCartItem {
    Id?: string;
    ShoppingCartId!: string;
    ProductId!: string;
    ProductName!: string;
    ProductPrice!: number;
    ProductStock?: number;
    ProductMainPhotoId?: string;
    ProductMainPhotoExtension?: string;
    Amount!: number;
    Total!: number;
}