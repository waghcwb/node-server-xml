const Xml = require('../models/Xml')
const parser = require('xml-js')

module.exports = {
  index(req, res) {
    res.set('Content-Type', 'text/xml')
    res.send(Xml)
  },
  xmlToJson(req, res) {
    res.send(parser.xml2json(Xml, { compact: true, spaces: 4 }))
  }
}