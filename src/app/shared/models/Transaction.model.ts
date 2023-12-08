import { DigiByteWallet } from './DigiByteWallet.model';

export class Transaction {
    Id!: string;
    SenderWallet!: DigiByteWallet;
    RecipientWallet!: DigiByteWallet;
    Amount!: number;
    Fee!: number;
    Date!: Date;
}