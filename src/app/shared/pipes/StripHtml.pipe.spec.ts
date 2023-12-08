import { StripHtmlPipe } from "./StripHtml.pipe";

describe('StripHtmlPipe', () => {
    const pipe = new StripHtmlPipe();

    it('should return nothing when empty text gets supplied', () => {
        expect(pipe.transform('')).toBe('');
    });

    it('should return a string stripped of HTML', () => {
        expect(pipe.transform('<p>This is <strong>HTML</strong> content</p>')).toBe('This is HTML content');
    });
});