# Tom Dye Site

This project was generated with the [Dojo CLI](https://github.com/dojo/cli) & [Dojo CLI create app command](https://github.com/dojo/cli-create-app).

## Build

Run `npm run build` or `dojo build --mode dist` (the `mode` option defaults to `dist`) to create a production build for the project. The built artifacts will be stored in the `output/dist` directory.

## Development Build

Run `npm run build:dev` or `dojo build --mode dev` to create a development build for the project. The built artifacts will be stored in the `output/dev` directory.

## Development server

Run `npm run dev` or `dojo build --mode dev --watch file --serve` to create a development build and start a development server. By default the server runs on port `9999`, navigate to `http://localhost:9999/`.

To change the port of the development server use the `--port` option on the `dojo build` command.

To create an in memory development build and start a development server with hot reload, switch the `--watch` option to `memory`.
