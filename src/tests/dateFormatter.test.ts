import { describe, expect, test } from 'vitest';

import { finnishDateString } from '../dateFormatter';


describe('Finnish date string formatter', () => {

    test('January 1st 2030 is Tuesday', () => {
        const jan_1_2030 = new Date('2030-01-01T12:00:00.000Z');
        let result = finnishDateString(jan_1_2030);

        expect(result).toEqual('tiistai 1. tammikuuta 2030');
    });

    test('February 1st 2030 is Friday', () => {
        const feb_1_2030 = new Date('2030-02-01T12:00:00.000Z');
        let result = finnishDateString(feb_1_2030);

        expect(result).toEqual('perjantai 1. helmikuuta 2030');
    });

    test('December 1st 2030 is Sunday', () => {
        const dec_1_2030 = new Date('2030-12-01T12:00:00.000Z');
        let result = finnishDateString(dec_1_2030);

        expect(result).toEqual('sunnuntai 1. joulukuuta 2030');
    });
});
