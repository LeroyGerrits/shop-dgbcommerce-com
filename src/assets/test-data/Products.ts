import { Product } from 'src/app/shared/models/Product.model';
import { TestDataShops } from './Shops';

export const TestDataProducts: Product[] = [
    {
        Id: '00000000-0000-0000-0000-000000000001',
        ShopId: TestDataShops[0].Id,
        Name: 'Test product',
        Stock: 25,
        Price: 1250,
        Visible: true,
        Description: 'This is a product'
    },
    {
        Id: '00000000-0000-0000-0000-000000000002',
        ShopId: TestDataShops[0].Id,
        Name: 'Test product 2',
        Stock: 0,
        Price: 250,
        Visible: true,
        Description: 'This is a product'
    }
];