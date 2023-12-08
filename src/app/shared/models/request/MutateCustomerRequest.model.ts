import { Country } from "../Country.model";
import { Customer } from "../Customer.model";

export class MutateCustomerRequest {
    Customer!: Customer;
    AddressLine1!: string;
    AddressLine2?: string;
    PostalCode!: string;
    City!: string;
    Province?: string;
    Country?: Country;
}