import { describe, expect, test } from 'vitest';

import { finnishDateString } from '../dateFormatter';

const tammikuu2030 = new Date('2030-01-01T12:00:00.000Z');

/**
* Tutustu expect-komennon käyttäminen osoitteessa https://vitest.dev/api/expect.html
**/
test('Tammikuun ensimmäinen', () => {
    expect.fail('no tests written for tiistai 1. tammikuuta 2030');
});

test('Helmikuun ensimmäinen', () => {
    expect.fail('no tests written for perjantai 1. helmikuuta 2030');
});

test('Joulukuun 1. päivä 2030', () => {
    expect.fail('no tests written for sunnuntai 1. joulukuuta 2030');
});

test('Joulukuun viimeinen', () => {
    expect.fail('no tests written for tiistai 31. joulukuuta 2030');
});
