export class Category {
    Id!: string;
    ShopId!: string;
    ParentId?: string;
    Name!: string;
    SortOrder?: number;
    Visible!: boolean;
    Children?: Category[];
}