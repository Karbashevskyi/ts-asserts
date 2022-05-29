import {Asserts} from '../lib';


describe('Object', () => {
    const message: string = 'Input must be an Array!';
    const dataForBadTesting = [
        {
            value: ""
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
            Asserts.array(value);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    it('Should true for []', () => {
        expect(Asserts.array([])).toBeUndefined();
    });

});
