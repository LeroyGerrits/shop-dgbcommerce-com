export class MutationResult {
    ErrorCode!: number;
    Identity!: string;
    Message!: string;
    Constraint?: string;

    readonly Success: boolean = this.ErrorCode == 0;
}