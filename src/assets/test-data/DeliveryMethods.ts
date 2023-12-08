import { DeliveryMethod } from 'src/app/shared/models/DeliveryMethod.model';
import { TestDataShops } from './Shops';

export const TestDataDeliveryMethods: DeliveryMethod[] = [
    {
        Id: '00000000-0000-0000-0000-000000000001',
        Shop: TestDataShops[0],
        Name: 'Pickup',
        Costs: 100
    },
    {
        Id: '00000000-0000-0000-0000-000000000002',
        Shop: TestDataShops[0],
        Name: 'Package Delivery',
        Costs: 1200
    }
];