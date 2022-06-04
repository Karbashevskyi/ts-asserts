# ts-asserts

![NPM Latest Version](https://img.shields.io/npm/v/ts-asserts)
![Downloads Count](https://img.shields.io/npm/dm/ts-asserts.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=ts-asserts)
![Test Status](https://img.shields.io/travis/karbashevskyi/ts-asserts/main.svg)
![Last Update Date](https://img.shields.io/github/last-commit/karbashevskyi/ts-asserts)
![Project License](https://img.shields.io/github/license/karbashevskyi/ts-asserts)

## Installation

```bash
$ npm install ts-asserts
```

## Examples

```typescript

import {Asserts} from 'ts-asserts';

export function todo(input: any): void {
    Asserts.Array(input);
    Asserts.BigInt(input);
    Asserts.Boolean(input);
    Asserts.Function(input);
    Asserts.Null(input);
    Asserts.NullOrUndefined(input);
    Asserts.Number(input);
    Asserts.Object(input);
    Asserts.String(input);
    Asserts.Symbol(input);
    Asserts.Undefined(input);
    // Not
    Asserts.Not.Array(input);
    Asserts.Not.BigInt(input);
    Asserts.Not.Boolean(input);
    Asserts.Not.Function(input);
    Asserts.Not.Null(input);
    Asserts.Not.NullOrUndefined(input);
    Asserts.Not.Number(input);
    Asserts.Not.Object(input);
    Asserts.Not.String(input);
    Asserts.Not.Symbol(input);
    Asserts.Not.Undefined(input);
}

```


## My Social Network Links
[Twitter Profile](https://twitter.com/Karbashevskyi)

[LinkedIn Profile](https://www.linkedin.com/in/ivan-karbashevskyi/)

[GitHub Profile](https://github.com/Karbashevskyi)

[medium.com Profile](https://medium.com/@ivankarbashevskyi)

[Pateron Profile](https://www.patreon.com/karbash)
