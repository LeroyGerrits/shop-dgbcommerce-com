import { PageCategory } from "../PageCategory.model";

export class PublicPage {
    Id!: string;
    Title!: string;
    Content?: string;
    Categories?: PageCategory[];
}