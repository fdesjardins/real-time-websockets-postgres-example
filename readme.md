# real-time-websockets-postgres-example [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url]

> Postgres LISTEN/NOTIFY + JSON types + WebSockets to build an Elm-like real-time data API

## Built with

- react
- redux
- babel
- webpack
- koa2
- await/async
- ramda
- websockets
- rxjs
- node.js 7
- postgresql
- mocha

## Next steps

1. make it use rxjs + redux on client
1. redux-actions
1. clean up postgres; add listen on each pool client?
1. better examples
1. fix dev server
1. protocol over ws? protobuf, stomp, json, ...
1. web worker reducers
1. clean it up

## Future Work

- https://www.youtube.com/watch?v=aZJnI6hxr-c

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[travis-url]: https://travis-ci.org/fdesjardins/real-time-websockets-postgres-example
[travis-image]: https://img.shields.io/travis/fdesjardins/real-time-websockets-postgres-example.svg?style=flat
[coveralls-url]: https://coveralls.io/r/fdesjardins/real-time-websockets-postgres-example
[coveralls-image]: https://img.shields.io/coveralls/fdesjardins/real-time-websockets-postgres-example.svg?style=flat
