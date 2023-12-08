import { Country } from "./Country.model";

export class Address {
    Id!: string;
    AddressLine1!: string;
    AddressLine2?: string;
    PostalCode!: string;
    City!: string;
    Province?: string;
    Country?: Country;
}