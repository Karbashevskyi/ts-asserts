import {Asserts} from '../lib';


describe('NotNullOrUndefined', () => {
    const message: string = 'Input must be not null or undefined!';
    const dataForBadTesting = [
        {
            value: null
        },
        {
            value: undefined
        }
    ];

    it.each(dataForBadTesting)('Should false for $value', ({value}) => {
        try {
            Asserts.NotNullOrUndefined(value);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    const dataForGoodTesting = [
        {
            value: BigInt(1)
        },
        {
            value: Symbol
        },
        {
            value: {}
        },
        {
            value: ""
        },
        {
            value: []
        },
        {
            value: true
        },
        {
            value: false
        },
        {
            value: ''
        },
        {
            value: ``
        },
        {
            value: Function
        },
        {
            value: () => {}
        }
    ];

    it.each(dataForGoodTesting)('Should true for $value', ({value}) => {
        expect(Asserts.NotNullOrUndefined(value)).toBeUndefined();
    });

});
