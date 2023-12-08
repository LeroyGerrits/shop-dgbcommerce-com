import { Gender } from 'src/app/shared/enums/Gender.enum';
import { Merchant } from 'src/app/shared/models/Merchant.model';

export const TestDataMerchants: Merchant[] = [
    {
        Id: '00000000-0000-0000-0000-000000000001',
        EmailAddress: 'merchant@dgbcommerce.com',
        Username: 'DGB Commerce',
        Gender: Gender.Male,
        LastName: 'Test',
        Salutation: 'Mr. Test'
    }, {
        Id: '00000000-0000-0000-0000-000000000002',
        EmailAddress: 'merchant@dgbcommerce.com',
        Username: 'DGB Commerce',
        Gender: Gender.Female,
        LastName: 'Test',
        Salutation: 'Ms. Test'
    }
];