import { Customer } from 'src/app/shared/models/Customer.model';
import { Gender } from 'src/app/shared/enums/Gender.enum';
import { TestDataAddresses } from './Addresses';
import { TestDataShops } from './Shops';

export const TestDataCustomers: Customer[] = [
    {
        Id: '00000000-0000-0000-0000-000000000001',
        ShopId: TestDataShops[0].Id,
        EmailAddress: 'customer@dgbcommerce.com',
        Username: 'DGB Commerce',
        Gender: Gender.Male,
        FirstName: 'Test',
        LastName: 'Test',
        Salutation: 'Mr. Test',
        Address: TestDataAddresses[0]
    }, {
        Id: '00000000-0000-0000-0000-000000000002',
        ShopId: TestDataShops[0].Id,
        EmailAddress: 'customer@dgbcommerce.com',
        Username: 'DGB Commerce',
        Gender: Gender.Female,
        FirstName: 'Test',
        LastName: 'Test',
        Salutation: 'Ms. Test',
        Address: TestDataAddresses[0]
    }
];