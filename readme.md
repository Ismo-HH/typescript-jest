# Yksikkötestaus Jest-työkalulla

Tässä tehtävässä harjoitellaan yksikkötestausta [Jest-työkalulla](https://jestjs.io/) Node.js-ympäristössä. Tehtävänäsi on kirjoittaa yksikkötestit valmiiksi annetulle [`finnishDateString`-funktiolle](./src/dateFormatter.ts), joka muotoilee sille annetun `Date`-olion suomenkieliseksi merkkijonoksi.

Tehtävä on kaksiosainen:

1. Ensimmäisessä osassa sinun tulee kirjoittaa funktiolle yksikkötestit, joiden avulla löydät funktiossa mahdollisesti piilevät loogiset virheet.

2. Toisessa osassa sinun tulee muokata annettua koodia niin, että funktio toimii toivotulla tavalla ja että kirjoittamasi testit menevät läpi. Testaamme koodisi omien testiesi lisäksi valmiilla testeillä.


## Testattava ja korjattava koodi

Tässä tehtävässä käsitellään [`dateFormatter.ts`-tiedostossa](./src/dateFormatter.ts) sijaitsevaa valmista `finnishDateString`-funktiota. Funktion on tarkoitus muotoilla sille annettu `Date`-olio suomenkieliseksi merkkijonoksi:

```ts
const dayNames: readonly string[] = [
    'maanantai', 'tiistai', 'keskiviikko',
    'torstai', 'perjantai', 'lauantai', 'sunnuntai'
];

const monthNames: readonly string[] = [
    'tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä',
    'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'
];

/**
 * Formats and returns the given date as a Finnish date string, such as
 * 'maanantai 1. tammikuuta 2024'.
 *
 * @param date the date to format
 * @returns the formatted string, in Finnish
 */
export function finnishDateString(date: Date): string {
    const dayName = dayNames[date.getDay() - 1];
    const monthName = monthNames[date.getMonth() - 1];

    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayName} ${day}. ${monthName}kuuta ${year}`;
}
```

Yllä esitetty valmis koodi sisältää virheitä, joiden vuoksi muodostetut merkkijonot eivät välttämättä vastaa odotettuja. Tässä tehtävässä sinun tulee kirjoittaa yksikkötestit bugiselle funktiolle ja tehdä tarvittavat toimet funktion korjaamiseksi.


## GitHub classroom

Tehtävä arvostellaan käyttäen [GitHub classroom](https://classroom.github.com/) -palvelua, joka suorittaa ohjelmasi ja tarkastaa sekä pisteyttää tulokset automaattisesti. Kun olet hyväksynyt tehtävän GitHub classroomissa ja saanut repositoriosta henkilökohtaisen kopion, kloonaa se itsellesi `git clone` -komennolla. Siirry sen jälkeen VS Codeen editoimaan tiedostoja.

Kloonatessasi repositoriota **varmista, että Git-osoitteen lopussa on oma GitHub-käyttäjänimesi**. Jos käyttäjänimesi puuttuu osoitteesta, kyseessä ei ole henkilökohtainen kopiosi tehtävästä. Luo tässä tapauksessa oma classroom-kopio tehtävästä itsellesi Teams-tehtävästä löytyvän linkin avulla.

Voit tarvittaessa lähettää tehtävän tarkastettavaksi monta kertaa. Tee tällöin uusi commit ja vie (push) muutokset GitHubiin. Varmista kuitenkin, että viimeisin tekemäsi commit tuottaa parhaat pisteet.

💡 *Automaattisen arvioinnin vuoksi et saa muuttaa `dateFormatter.ts`-tiedoston etkä sieltä julkaistavan `finnishDateString`-funktion nimeä tai parametreja.*


## Riippuvuuksien asentaminen

Aloita asentamalla projektin riippuvuudet, jotka on määritelty `package.json`-tiedostossa:

```sh
$ npm install
```

Riippuvuudet sisältävät sekä [TypeScript-kielen](https://www.npmjs.com/package/typescript), [Jest-testaustyökalun](https://www.npmjs.com/package/jest) että [`ts-node`](https://www.npmjs.com/package/ts-node)- ja [`ts-jest`](https://www.npmjs.com/package/ts-jest)-paketit TypeScript-kielisen koodin ja testien suorittamiseksi Node.js:llä. Node.js sinulta tulee löytyä valmiina.


## Ohjelman suorittaminen

Tässä tehtävässä tarkoituksena on harjoitella yksikkötestausta, eli testata yksittäistä ohjelman osaa erillään muusta mahdollisesta koodista. Tehtävässä ei siis ole lainkaan käyttöliittymää, jonka kautta voisit kokeilla funktion toimintaa manuaalisesti.

Oman "pääohjelman" kirjoittaminen `finnishDateString`-funktion kokeilemiseksi ei ole kiellettyä, mutta kannustamme vahvasti keskittymään funktion yksikkötestaukseen ja jättämään mahdolliset muut skriptit kirjoittamatta.


## Testien suorittaminen

Tehtävän yksikkötestit suoritetaan [Jest-testityökalun](https://jestjs.io/) avulla komennolla `npm test`:

```sh
$ npm test
```

Taustalla `npm` suorittaa `test`-nimisen skriptin, joka on määritetty `package.json`-tiedostossa seuraavasti:

```json
{
    "scripts": {
        "test": "jest --verbose --coverage"
    }
}
```

Yllä [Jest-komennolle](https://jestjs.io/docs/cli) annetaan kaksi parametria, joiden merkitykset ovat seuraavat:

* `--verbose` *"Display individual test results with the test suite hierarchy."* ([jestjs.io](https://jestjs.io/docs/cli))

* `--coverage` *"Indicates that test coverage information should be collected and reported in the output."* ([jestjs.io](https://jestjs.io/docs/cli))

💡 *Älä muuta testien käynnistyskomentoa. Mikäli testit eivät mene läpi, kiinnitä erityisesti huomiota saamasi virheraportin **Message**-kohtiin.*


## Osa 1: Omien testien kirjoittaminen

Tehtävän ensimmäisessä osassa sinun tulee kirjoittaa yksikkötestit [`dateFormatter.ts`-tiedostossa](./src/dateFormatter.ts) sijaitsevalle `finnishDateString`-funktiolle. Funktion on tarkoitus muotoilla sille annettu `Date`-olion suomenkieliseksi merkkijonoksi ja palauttaa esimerkiksi teksti `'maanantai 1. tammikuuta 2024'`.

Suosittelemme kirjoittamaan testit tiedostoon [src/tests/dateFormatter.test.ts](./src/tests/dateFormatter.test.ts). Mikäli kirjoitat myös muita testitiedostoja, lisää niiden nimen päätteeksi `.test.ts` ja huolehdi, että testit ovat `src`-hakemiston alla, jotta Jest löytää ja suorittaa testisi. Voit hyödyntää testeissäsi joko [Jest:in `expect`-syntaksia](https://jestjs.io/docs/expect) tai [Node.js:n `assert`-syntaksia](https://nodejs.org/api/assert.html).

**Saat tästä tehtävästä pisteet, vaikka testisi tuottavat `failed`-tuloksen**. Testiraportista on kuitenkin käytävä ilmi, että `dateFormatter.ts`-tiedosto on ainakin osittain testattu:

```
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |      100 |     100 |     100 |
 dateFormatter.ts |     100 |      100 |     100 |     100 |
------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       4 failed, 4 total
```

## Osa 2: Automatisoidun työnkulun toteuttaminen

todo

## Lisenssit ja tekijänoikeudet

Tämän tehtävän on kehittänyt Teemu Havulinna ja Ismo Harjunmaa ja se on lisensoitu [Creative Commons BY-NC-SA -lisenssillä](https://creativecommons.org/licenses/by-nc-sa/4.0/).
