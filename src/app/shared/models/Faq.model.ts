import { FaqCategory } from './FaqCategory.model';

export class Faq {
    Id!: string;
    Category!: FaqCategory;
    Title!: string;
    Keywords?: string[];
    Content?: string;
    SortOrder?: number;
}