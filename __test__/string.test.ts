import {Asserts} from '../lib';


describe('String', () => {

    const message: string = 'Input must be a String!';
    const dataForBadTesting = [
        {
            value: []
        },
        {
            value: 0
        },
        {
            value: true
        },
        {
            value: false
        },
        {
            value: null
        },
        {
            value: undefined
        },
        {
            value: Function
        },
        {
            value: () => {}
        }
    ];

    it.each(dataForBadTesting)('Should false for $value', ({value}) => {
        try {
            Asserts.string(value);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    it('Should true for ""', () => {
        expect(Asserts.string("")).toBeUndefined();
    });

    it('Should true for ``', () => {
        expect(Asserts.string(``)).toBeUndefined();
    });

    it('Should true for \'\'', () => {
        expect(Asserts.string('')).toBeUndefined();
    });

});
