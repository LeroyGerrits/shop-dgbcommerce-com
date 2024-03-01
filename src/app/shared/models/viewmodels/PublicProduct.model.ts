import { PublicProductPhoto } from "./PublicProductPhoto.model";

export class PublicProduct {
    Id!: string;
    Name!: string;
    Description?: string;
    Stock?: number;
    Price!: number;
    MainPhotoId?: string;
    MainPhotoExtension?: string;
    Photos?: PublicProductPhoto[];
}