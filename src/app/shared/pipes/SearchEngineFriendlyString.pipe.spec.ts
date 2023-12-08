import { SearchEngineFriendlyStringPipe } from "./SearchEngineFriendlyString.pipe";

describe('SearchEngineFriendlyStringPipe', () => {
    const pipe = new SearchEngineFriendlyStringPipe();

    it('should return nothing when empty text gets supplied', () => {
        expect(pipe.transform('')).toBe('');
    });

    it('should return a search engine friendly representation of a string', () => {
        expect(pipe.transform('This is a title!')).toBe('this-is-a-title');
    });
});