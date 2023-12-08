import { Customer } from './Customer.model';
import { DeliveryMethod } from './DeliveryMethod.model';
import { Shop } from './Shop.model';

export class Order {
    Id!: string;
    Shop!: Shop;
    Customer!: Customer;
    OrderDate!: Date;
    DeliveryMethod!: DeliveryMethod;
    PayDate?: Date;
    ShipmentDate?: Date;
}