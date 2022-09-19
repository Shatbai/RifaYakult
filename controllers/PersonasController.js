const req = require('express/lib/request');
let ProductModel = require('../models/personas')

exports.create = (req, res) => {
    res.render('pages/registrar');;
  }
  
exports.store = (req, res) => {
    let personas = {
      ref: req.body.ref,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      email:req.body.email,
    };

    ProductModel.create(personas)
      .then((id) => {
        res.redirect('/');
      });
  }
  exports.show = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(id).then((personas) => {
      // Si el producto no existe entonces
      if (personas == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Si el producto existe entonces muestra la vista products/show.hbs
      // con la información del producto
      res.render('pages/registros', {personas: personas});
    });
  }
exports.buscar=(req,res)=>{
    let personas = {
        ref: req.body.ref
    };
    console.log(req.body)

  }