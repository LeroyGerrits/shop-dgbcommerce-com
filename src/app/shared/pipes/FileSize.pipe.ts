import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FileSize' })
export class FileSizePipe implements PipeTransform {

    constructor() { }

    transform(fileSize: number): string {
        if (fileSize > 1073741824) // 1024 * 1024 * 1024
            return (fileSize / 1073741824).toFixed(2) + ' GB';

        if (fileSize > 1048576) // 1024 * 1024
            return (fileSize / 1048576).toFixed(2) + ' MB';

        if (fileSize > 1024)
            return (fileSize / 1024).toFixed(2) + ' KB';

        return fileSize.toString() + " B";
    }
}