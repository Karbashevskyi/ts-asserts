import {Asserts} from '../lib';


describe('Boolean', () => {
    const message: string = 'Input must be a Boolean!';
    const dataForBadTesting = [
        {
            value: ""
        },
        {
            value: []
        },
        {
            value: null
        },
        {
            value: undefined
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

    it.each(dataForBadTesting)('Should false for $value', ({value}) => {
        try {
            Asserts.boolean(value);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    it('Should true for true', () => {
        expect(Asserts.boolean(true)).toBeUndefined();
    });

    it('Should true for false', () => {
        expect(Asserts.boolean(false)).toBeUndefined();
    });

});
