import { test, describe, expect } from '@jest/globals'; // https://jestjs.io/docs/expect
import { strict as assert } from 'node:assert';         // https://nodejs.org/api/assert.html

import { finnishDateString } from '../dateFormatter';   // the function to be tested


const january1 = new Date('2024-01-01T00:00:00Z');
const february1 = new Date('2024-02-01T00:00:00Z');
const december31 = new Date('2023-12-31T00:00:00Z');
const tammikuu2030 = new Date('2030-01-15T12:00:00.000Z');

test('Tammikuun ensimmäinen', () => {
    assert.fail('Toteuta testi tähän');
});

test('Joulukuun viimeinen', () => {
    assert.fail('Toteuta testi tähän');
});

test('Tammikuun 15. päivä 2030', () => {
    assert.fail('Toteuta testi tähän');
});