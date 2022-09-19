const path = require('path');
let ProductModel = require('../models/personas')
exports.index = (req, res) => {
  res.render('pages/index');
  }
  
exports.registrar = (req, res) => {
  res.render('pages/registrar');
  }
exports.aleatorio = (req, res) => {
  res.render('pages/aleatorio');
  }
exports.verboleto = (req, res) => {
  res.render('pages/miboleto');
  }
exports.registros = (req, res) => {
  ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let personas = data;
      res.render('pages/registros',{personas: personas});
    });
  }