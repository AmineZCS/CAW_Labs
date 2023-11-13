const { mean } = require('./notation');

describe('notations tests', () => {
    test('mean([1,2,3,4,5]) should return 3', () => {
        expect(mean([1, 2, 3, 4, 5])).toBe(3);
    }
    );
    test('mean([]) should return 0', () => {
        expect(mean([])).toBe(0);
    }
    );
    test('mean("foo") should return 0', () => {
        expect(mean("foo")).toBe(0);
    }
    );
    test('mean([1,2,3,NaN]) should return 0', () => {
        expect(mean([1, 2, 3, NaN])).toBe(0);
    }
    );
}
);