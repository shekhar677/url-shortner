var express = require('express');
var app = express();
var shortUrl = require('node-url-shortener');
var bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json())

let urls = [];

app.get("/", function (req, res) {
  res.send("server is running")
})

app.post("/short", async function (req, res) {
  const {
    url: longUrl
  } = req.body;

  shortUrl.short(longUrl, function (err, url) {
    if (err) {
      res.status(400).json({
        message: 'cannot tinyfy',
        error: err
      })
    }
    urls.push({
      longUrl,
      shortUrl: url
    });
    res.json({
      short: url
    })
  });
})

app.get("/url", (req, res) => {
  res.json({
    urls
  })
})

module.exports = {
  path: "/api",
  handler: app
}
