const express = require("express");
const next = require("next");
const { createServer: createHttpsServer } = require("https");
const { createServer: createHttpServer } = require("http");
const { readFileSync } = require("fs");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// force https
function requireHTTPS(req, res, next) {
  if (!req.secure && process.env.NODE_ENV !== "development") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

app
  .prepare()
  .then(() => {
    const server = express();

    // require https on production
    if (!dev) {
      server.use(requireHTTPS);
    }

    server.get("/", (req, res) => {
      return app.render(req, res, "/index", req.query);
    });
    // server.get('/posts/:id', (req, res) => {
    //     return app.render(req, res, '/posts', { id: req.params.id })
    // })

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    // run https server on production
    if (dev) {
      createHttpServer(server).listen(port);
    } else {
      createHttpsServer(
        {
          key: readFileSync("/etc/letsencrypt/live/naimburu.com/privkey.pem"),
          cert: readFileSync("/etc/letsencrypt/live/naimburu.com/fullchain.pem")
        },
        server
      ).listen(port);
    }
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
