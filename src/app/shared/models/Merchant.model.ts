import { Gender } from 'src/app/shared/enums/Gender.enum';

export class Merchant {
    Id?: string;
    Activated?: Date;
    EmailAddress!: string;
    Username!: string;
    Password?: string;
    Gender!: Gender;
    FirstName?: string;
    LastName!: string;
    LastLogin?: Date;
    LastIpAddress?: string;
    SecondLastLogin?: Date;
    SecondLastIpAddress?: string;
    Salutation!: string;
    Score?: number;
}