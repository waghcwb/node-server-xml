const fs = require('fs')

module.exports = {
  index(req, res) {
    res.set('Content-Type', 'text/xml');
    res.send(fs.readFileSync('./hering-nossas-lojas.xml', {
      encoding: 'utf-8'
    }))
  }
}