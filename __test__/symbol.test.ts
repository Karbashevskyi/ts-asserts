import {Asserts} from '../lib';


describe('Symbol', () => {

    const message: string = 'Input must be a Symbol!';
    const dataForBadTesting = [
        {
            value: BigInt(1)
        },
        {
            value: ""
        },
        {
            value: ''
        },
        {
            value: ``
        },
        {
            value: {}
        },
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
            Asserts.Symbol(value);
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', message);
        }
    });

    it('Should true for Symbol', () => {
        expect(Asserts.Symbol(Symbol())).toBeUndefined();
    });

});
