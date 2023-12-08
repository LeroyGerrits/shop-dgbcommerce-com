import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'StripHtml' })
export class StripHtmlPipe implements PipeTransform {

    constructor() { }

    transform(text: string) {
        if (!text) {
            return text;
        }

        return text.replace(/<(?:.|\n)*?>/gm, '').trim();
    }
}