const path = require('path');
let ProductModel = require('../models/personas')
exports.index = (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
  }
  
exports.registrar = (req, res) => {
  ProductModel.all()
  .then((data) => {
    let personas = data;
    res.sendFile(path.join(__dirname+'/registrar.html'),{personas:personas});
  });

  }
exports.aleatorio = (req, res) => {
    res.sendFile(path.join(__dirname+'/aleatorio.html'));
  }
exports.verboleto = (req, res) => {
    res.sendFile(path.join(__dirname+'/miboleto.html'));
  }
  exports.registros = (req, res) => {
    res.sendFile(path.join(__dirname+'/registros.html'));
  } 