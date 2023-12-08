import { ProductPhoto } from 'src/app/shared/models/ProductPhoto.model';

export const TestDataProductPhotos: ProductPhoto[] = [
    {
        Id: '00000000-0000-0000-0000-000000000001',
        ProductId: '00000000-0000-0000-0000-000000000010',
        File: 'file.jpg',
        Extension: 'jpg',
        Description: 'This is a photo',
        ThumbnailUrl: 'path/to/photo_thumbnail.jpg',
        PhotoUrl: 'path/to/photo.jpg',
        SortOrder: 1,
        Main: true,
        Visible: true
    },
    {
        Id: '00000000-0000-0000-0000-000000000002',
        ProductId: '00000000-0000-0000-0000-000000000010',
        File: 'file.jpg',
        Extension: 'jpg',
        Description: 'This is a photo',
        ThumbnailUrl: 'path/to/photo_thumbnail.jpg',
        PhotoUrl: 'path/to/photo.jpg',
        SortOrder: 2,
        Main: false,
        Visible: true
    }
];