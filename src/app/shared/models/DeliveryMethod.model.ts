import { Shop } from './Shop.model';

export class DeliveryMethod {
    Id!: string;
    Shop!: Shop;
    Name!: string;
    Costs?: number;
}