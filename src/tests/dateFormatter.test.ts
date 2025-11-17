import { describe, expect, test } from 'vitest';

import { finnishDateString } from '../dateFormatter';

const january1 = new Date('2024-01-01T00:00:00Z');
const february1 = new Date('2024-02-01T00:00:00Z');
const december31 = new Date('2023-12-31T00:00:00Z');
const tammikuu2030 = new Date('2030-01-15T12:00:00.000Z');

test('Tammikuun ensimmäinen', () => {
    expect.fail('no tests written for maanantai 1. tammikuuta 2024');
});

test('Helmikuun ensimmäinen', () => {
    expect.fail('no tests written for torstai 1. helmikuuta 2024');
});

test('Joulukuun viimeinen', () => {
    expect.fail('no tests written for sunnuntai 31. joulukuuta 2023');
});

test('Tammikuun 15. päivä 2030', () => {
    expect.fail('no tests written for tiistai 15. tammikuuta 2030');
});