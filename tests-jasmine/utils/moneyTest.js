import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
    it('converts cents to dollars', () => {
        expect(formatCurrency(1517800)).toEqual('$15,178.00');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('$0.00')
    });

    it('rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('$20.01')
    });
});