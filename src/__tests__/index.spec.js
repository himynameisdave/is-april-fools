import isAprilFools from '../index.js';
import { APRIL, FOOLS } from '../constants.js';


describe('isAprilFools', () => {
    const originalDate = Date;
    const mockDate = (...date) => {
        const mockedDate = new Date(...date);
        global.Date = jest.fn(() => mockedDate);
        global.Date.setDate = originalDate.setDate;
    };
    afterEach(() => {
        global.Date = originalDate;
    });
    it('returns true when date is April 1st', () => {
        mockDate(2019, APRIL, FOOLS);
        expect(isAprilFools()).toBe(true);
    });
    it('returns false when date is not April 1st', () => {
        mockDate(2019, APRIL, 20);
        expect(isAprilFools()).toBe(false);
    });
});
