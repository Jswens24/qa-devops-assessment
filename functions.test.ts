const { shuffleArray } = require('./utils')

describe('shuffleArray should', () => {
    test('this function will return an array', () => {
        const arr = []
        expect(shuffleArray(arr)).toEqual(arr);
    });

    test('this function will return the same length as the argument sent in', () => {
        const arr = [1, 3, 4];
        expect(shuffleArray(arr.length)).toEqual(arr.length)
    })
})