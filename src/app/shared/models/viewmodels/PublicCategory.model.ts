export class PublicCategory {
    Id!: string;
    ParentId?: string;
    Name!: string;
    Children?: PublicCategory[];
}