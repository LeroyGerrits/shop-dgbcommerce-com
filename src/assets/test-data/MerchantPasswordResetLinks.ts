import { MerchantPasswordResetLink } from 'src/app/shared/models/MerchantPasswordResetLink.model';
import { TestDataMerchants } from './Merchants';

export const TestDataMerchantPasswordResetLinks: MerchantPasswordResetLink[] = [
    {
        Id: '00000000-0000-0000-0000-000000000001',
        Merchant: TestDataMerchants[0],
        Date: new Date(),
        Key: '12345'
    }, {
        Id: '00000000-0000-0000-0000-000000000002',
        Merchant: TestDataMerchants[0],
        Date: new Date(),
        Key: '12345'
    }
];