// EXPRESS SERVER
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev }); // initializes an instance of next.js
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/post/:id", (req, res) => {
    const { id } = req.params;
    app.render(req, res, `/post`, {
      id,
      test: "this will appear as props in Post"
    });
  });

  // for every request
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Now serving on local host 3000!");
  });
});
