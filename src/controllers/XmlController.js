const xml = require('../models/Xml')
const parser = require('xml-js')

module.exports = {
  index(req, res) {
    res.set('Content-Type', 'text/xml')
    res.send(xml)
  },
  xmlToJson(req, res) {
    res.set('content-type', 'application/json')
    res.send(parser.xml2json(xml, { compact: true, spaces: 4 }))
  }
}