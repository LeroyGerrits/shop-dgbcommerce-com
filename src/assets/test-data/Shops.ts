import { Shop } from 'src/app/shared/models/Shop.model';
import { TestDataCategories } from './Categories';
import { TestDataCountries } from './Countries';

export const TestDataShops: Shop[] = [
    {
        Id: '00000000-0000-0000-0000-000000000001',
        Name: 'Example shop 1',
        MerchantId: '00000000-0000-0000-0000-000000000011',
        SubDomain: 'exampleshop1',
        Country: TestDataCountries[0],
        Category: {
            Id: '00000000-0000-0000-0000-000000000001',
            Name: 'Clothes'
        },
        Featured: true
    },
    {
        Id: '00000000-0000-0000-0000-000000000002',
        Name: 'Example shop 2',
        MerchantId: '00000000-0000-0000-0000-000000000012',
        SubDomain: 'exampleshop2',
        Country: TestDataCountries[0],
        Category: {
            Id: '00000000-0000-0000-0000-000000000001',
            Name: 'Clothes'
        },
        Featured: false
    }
];