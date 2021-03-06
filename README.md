# Gabe's Flux Components Generator

Generates actions/stores/components for your Flux/React App. I made this because I'm not a big fan of
libraries like [fluxxor](https://github.com/BinaryMuse/fluxxor) and [refluxjs](https://github.com/spoike/refluxjs)
as they do not directly follow the Flux pattern. Usually the argument for using these libraries is that
there is too much boilerplate code required to get up and running. Using a yeoman generator cuts down on this tediousness.

## Getting Started

To install generator-gflux from npm, run:

```bash
npm install -g yo
npm install -g generator-gflux
```

To initialize the generator, run the configuration:

```bash
yo gflux
```

Then you can generate actions, stores and components with sub-generators:

```bash
yo gflux:action Gabe
yo gflux:component Gabe
yo gflux:store Gabe
```

Which will create:

```
js/actions/GabeActions.js
js/components/GabeComponent.js
js/stores/GabeStore.js
```

## TODO

- Add test file templates for jest
- Add actual tests for the generator

## Contributing

If you would like to contribute, please open a pull request for one of the above TODO items. I will not be accepting pull requests for stylistic changes, though feel free to open an issue for discussion. I've made this for my own personal use and thus the generated files follow my style of writing JavaScript.

## License

MIT
