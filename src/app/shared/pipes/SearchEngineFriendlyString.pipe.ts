import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'SearchEngineFriendlyString' })
export class SearchEngineFriendlyStringPipe implements PipeTransform {

    constructor() { }

    transform(text: string) {
        if (!text) {
            return text;
        }

        text = text.trim().replace(/\W+/g, '-').toLowerCase();

        if (text.charAt(text.length - 1) == '-') {
            text = text.substr(0, text.length - 1);
        }

        return text;
    }
}