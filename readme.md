# local-reverse-proxy

## Description

`local-reverse-proxy` is a simple command-line tool built with Node.js that sets up a local reverse proxy for forwarding HTTP requests from a specified source to a target. It uses the `http-proxy` library to create a basic proxy server.

## Installation

To use `local-reverse-proxy`, you can install it globally using the following command: `npm i -g local-reverse-proxy`

## Usage

bash

`npx local-reverse-proxy --from <from> --port <port>`

### Options

- `--from` or `-f`: Specify the source URL or address to forward requests from.
- `--port` or `-p`: Specify the port on which the local reverse proxy should listen.

### Example

bash

`npx local-reverse-proxy --from http://localhost:3000 --port 8080`

This command sets up a local reverse proxy that listens on port 8080 and forwards requests to `http://localhost:3000`.

## Important Notes

- Ensure that Node.js is installed on your machine.
- The specified `from` and `port` values are required parameters.

## Error Handling

The tool includes basic error handling for uncaught exceptions and unhandled rejections, logging any errors to the console.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
