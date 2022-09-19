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
    let ref = req.params.ref;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(ref).then((personas) => {
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
    let refd = {
        ref: req.body.ref
    };
    console.log(req.body.ref);
    ProductModel.find(req.body.ref).then((personas) =>{
        if (personas == null) {
            // Regresa el error 404
            res.status(404).send('Not found');
            return;
          }
          // Si el producto existe entonces muestra la vista products/show.hbs
          // con la información del producto
         console.log(personas.nombre);
         if(personas.nombre == ''){
            res.render('pages/registrar', {personas: personas});
         }
         res.render('pages/aleatorio', {personas: personas});

        });

    }
exports.update = (req, res) => {
        // Obtiene el id que viene en la url
        let ref = req.params.ref;
        // Busca dentro de la base de datos el producto con el id indicado
        ProductModel.find(ref).then((personas) => {
          // Si el producto no existe entonces
          if (personas == null) {
            // Regresa el error 404
            res.status(404).send('Not found');
            return;
          }
      
          // Define los datos del producto actualizado
          let updateProduct = {
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            email: req.body.email
          }
      
          // Actualiza los datos del producto
          ProductModel.update(product.ref, updateProduct)
            .then((ref) => {
              // Al terminar redirige el índice
              res.redirect('/pages/aleatorio');
            });
        });
      }