const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
let Parser = require('rss-parser')
let parser = new Parser()

app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))

parser.parseURL(CORS_PROXY + 'https://www.reddit.com/.rss', function(err, feed) {
  if (err) throw err;
  console.log(feed.title);
  feed.items.forEach(function(entry) {
    console.log(entry.title + ':' + entry.link);
  })
})

app.get('/', function (req, res) {
  res.send('<!DOCTYPE html><html><head><title>Node RSS Link</title></head><body bgcolor="#ccddff"><div style="font-weight:bold; text-align:center;"></div></body></html>')
})

app.listen(app.get('port'), () => { 
  console.log('Server is running on port 5000') 
})
