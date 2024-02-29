import { Pipe, PipeTransform } from '@angular/core';

import { StripHtmlPipe } from './StripHtml.pipe';

@Pipe({ name: 'FormatRichText' })
export class FormatRichTextPipe implements PipeTransform {

    constructor(
        private stripHtmlPipe: StripHtmlPipe
    ) { }

    transform(text: string) {
        if (!text) {
            return text;
        }

        // Replace actual HTML first
        text = this.stripHtmlPipe.transform(text);

        // Line breaks
        return text.replace(new RegExp('\r?\n', 'g'), '<br />');
    }
}