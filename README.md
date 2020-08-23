[![Build Status](https://travis-ci.com/Alheimsins/folkevalgt-api.svg?branch=master)](https://travis-ci.com/Alheimsins/folkevalgt-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# folkevalgt-api

Proof of concept av felles api for kontaktinformasjon til folkevalgte.

Støtter data hentet fra løsninger levert av Prokom, Acos og Tieto.

# API

## ```GET /api/kommuner```

Lister ut alle registrerte kommuner

```bash
$ curl https://folkevalgt.alheimsins.net/api/kommuner
```

## ```GET /api/fylker```

Lister ut alle registrerte fylker

```bash
$ curl https://folkevalgt.alheimsins.net/api/fylker
```

## ```GET /api/utvalg?omrade=:områdenummer```

Lister ut alle registrerte utvalg på bakgrunn av fylkesnummer eller kommunenummer

```bash
$ curl https://folkevalgt.alheimsins.net/api/utvalg?omrade=0807
```

## ```GET /api/utvalg?omrade=:områdenummer&utvalgsid=:utvalgsId```

Lister ut alle medlemmer i utvalg på bakgrunn av fylkesnummer/kommunenummer og utvalgsId

```bash
$ curl https://folkevalgt.alheimsins.net/api/utvalg?omrade=0807&utvalgsid=355
```

## License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" alt="Alheimsins logo" height="150px" width="150px" />
