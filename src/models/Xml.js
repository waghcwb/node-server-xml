const fs = require('fs')
const xmlpath = './hering-nossas-lojas.xml'

const Xml = fs.readFileSync(xmlpath, {
  encoding: 'utf-8'
})

module.exports = Xml