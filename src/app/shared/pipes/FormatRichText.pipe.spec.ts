import { FormatRichTextPipe } from "./FormatRichText.pipe";
import { StripHtmlPipe } from "./StripHtml.pipe";

describe('FormatRichTextPipe', () => {
    const stripHtmlPipe = new StripHtmlPipe();
    const pipe = new FormatRichTextPipe(stripHtmlPipe);

    it('should return nothing when empty text gets supplied', () => {
        expect(pipe.transform('')).toBe('');
    });

    it('should replace line breaks', () => {
        expect(pipe.transform('This is a string with a\r\nline break')).toBe('This is a string with a<br />>line break');
    });
});