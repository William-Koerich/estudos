const moduloA = require('../../moduloA')
console.log(moduloA.bemVindo)

const saudacao = require('saudacao')
console.log(saudacao)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http
  .createServer((req, res) => {
    res.write('Fala galerinha do mal!!')
    res.end()
  })
  .listen(8080)
