const path = require('path');
exports.index = (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
  }
  
exports.registrar = (req, res) => {
    res.sendFile(path.join(__dirname+'/registrar.html'));
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