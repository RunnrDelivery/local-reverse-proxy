#!/usr/bin/env node

const arg = require("arg");
const http = require("http");
const httpProxy = require("http-proxy");

function exitError(s) {
  console.error(s);
  process.exit(1);
}

const args = arg({
  "--from": String,
  "--port": String,
  "-f": "--from",
  "-p": "--port",
});

if (args["--from"] === undefined || args["--port"] === undefined) {
  exitError("Usage: local-reverse-proxy --from <from> --port <port>");
}

const from = args["--from"];
const port = +args["--port"];

if (isNaN(port)) {
  exitError("Invalid port");
}

const proxy = httpProxy.createProxyServer({
  hostRewrite: true,
});
const server = http.createServer(function (req, res) {
  proxy.web(req, res, { target: from, changeOrigin: true, secure: false });
});
server.listen(port);

console.log(`Listening on port ${port} and forwarding from ${from}`);

process.on("uncaughtException", function (err) {
  console.error(err);
});

process.on("unhandledRejection", function (err) {
  console.error(err);
});
