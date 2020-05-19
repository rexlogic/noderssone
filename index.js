const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
let Parser = require('rss-parser')
let parser = new Parser

var linkone = ''

app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))

parser.parseURL('https://www.reddit.com/.rss', function(err, feed) {
  if (err) throw err;
  linkone = feed.items[0].link;
  console.log(linkone);
})

app.get('/', function (req, res) {
  res.send(linkone)
})

app.listen(app.get('port'), () => { 
  console.log('Server is running on port 5000') 
})
