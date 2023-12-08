import { FileSizePipe } from "./FileSize.pipe";

describe('FileSizePipe', () => {
    const pipe = new FileSizePipe();

    it('should return the number as text in bytes if it is lower than 1024', () => {
        expect(pipe.transform(500)).toBe('500 B');
    });

    it('should divide the number by 1.024 and display in KB if it is higher than 1.024', () => {
        expect(pipe.transform(1500)).toBe('1.46 KB');
    });

    it('should divide the number by 1.048.576 and display in MB if it is higher than 1.048.576', () => {
        expect(pipe.transform(1500000)).toBe('1.43 MB');
    });

    it('should divide the number by 1.073.741.824 and display in KH/s if it is higher than 1.073.741.824', () => {
        expect(pipe.transform(1500000000)).toBe('1.40 GB');
    });
});