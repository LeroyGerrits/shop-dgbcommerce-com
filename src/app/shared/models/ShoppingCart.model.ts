import { ShoppingCartItem } from "./ShoppingCartItem.model";

export class ShoppingCart {
    Id!: string;
    Session!: string;
    CustomerId!: string;
    Created?: Date;
    Edited?: Date;
    Items?: ShoppingCartItem[]
    CumulativeAmount!: number;
    CumulativeTotal!: number;    
}