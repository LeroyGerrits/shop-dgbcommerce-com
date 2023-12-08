import { Category } from 'src/app/shared/models/Category.model';
import { TestDataShops } from './Shops';

export const TestDataCategories: Category[] = [
    {
        Id: '00000000-0000-0000-0000-000000000001',
        ParentId: '00000000-0000-0000-0000-000000000011',
        ShopId: TestDataShops[0].Id,
        Name: 'Test category 1',
        Visible: true,
        Children: <Category[]>[
            {
                Id: '00000000-0000-0000-0000-00000000001a',
                ParentId: '00000000-0000-0000-0000-000000000001',
                ShopId: TestDataShops[0].Id,
                Name: 'Sub category 1',
                Visible: true
            }
        ]
    },
    {
        Id: '00000000-0000-0000-0000-000000000002',
        ShopId: TestDataShops[0].Id,
        Name: 'Test category 2',
        Visible: true,
        Children: <Category[]>[
            {
                Id: '00000000-0000-0000-0000-00000000002a',
                ParentId: '00000000-0000-0000-0000-000000000002',
                ShopId: TestDataShops[0].Id,
                Name: 'Sub category 2',
                Visible: true
            }
        ]
    }
];