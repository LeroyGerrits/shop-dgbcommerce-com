import { Merchant } from './Merchant.model';

export class MerchantPasswordResetLink {
    Id!: string;
    Merchant!: Merchant;
    Date!: Date;
    IpAddress?: string;
    Key!: string;
    Used?: Date;
}