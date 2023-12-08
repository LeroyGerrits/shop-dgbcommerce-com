import { PublicShop } from 'src/app/shared/models/viewmodels/PublicShop.model';

export const TestDataPublicShops: PublicShop[] = [
    {
        Id: '00000000-0000-0000-0000-000000000001',
        Name: 'Example shop 1',
        MerchantId: '00000000-0000-0000-0000-000000000011',
        MerchantUsername: 'DGB Commerce',
        MerchantScore: 4,
        SubDomain: 'exampleshop1',
        Featured: true
    },
    {
        Id: '00000000-0000-0000-0000-000000000002',
        Name: 'Example shop 2',
        MerchantId: '00000000-0000-0000-0000-000000000012',
        MerchantUsername: 'DGB Commerce',
        MerchantScore: 2,
        SubDomain: 'exampleshop2',
        Featured: false
    }
];