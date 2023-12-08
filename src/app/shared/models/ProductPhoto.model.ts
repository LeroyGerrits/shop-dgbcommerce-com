export class ProductPhoto {
    Id!: string;
    ProductId!: string;
    File!: string;
    Extension!: string;
    Description?: string;
    ThumbnailUrl!: string;
    PhotoUrl!: string;
    SortOrder?: number;
    Main!: boolean;
    Visible!: boolean;
}