
const e = require('express');
const knex = require('../database/connection');


exports.factory = (ref,nombre, telefono,email,boleto) => {
  return {
    ref: ref,
    nombre:nombre,
    telefono:telefono,
    email:email,
    boleto:boleto
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('personas');
}