import { test, describe, expect } from '@jest/globals'; // https://jestjs.io/docs/expect
import { strict as assert } from 'node:assert';         // https://nodejs.org/api/assert.html

import { finnishDateString } from '../dateFormatter';   // the function to be tested


const january1 = new Date('2024-01-01T00:00:00Z');
const february1 = new Date('2024-02-01T00:00:00Z');
const december31 = new Date('2023-12-31T00:00:00Z');
const tammikuu2030 = new Date('2030-01-15T12:00:00.000Z');

test('Tammikuun ensimmäinen', () => {
    let result = finnishDateString(january1);
    assert.equal(result.toLowerCase(), 'maanantai 1. tammikuuta 2024');
});

test('Helmikuun ensimmäinen', () => {
    let result = finnishDateString(february1);
    assert.equal(result.toLowerCase(), 'torstai 1. helmikuuta 2024');
});

test('Joulukuun viimeinen', () => {
    let result = finnishDateString(december31);
    assert.equal(result.toLowerCase(), 'sunnuntai 31. joulukuuta 2023');
});

test('Tammikuun 15. päivä', () => {
    let result = finnishDateString(tammikuu2030);
    assert.equal(result.toLowerCase(), 'tiistai 15. tammikuuta 2030');
});