
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
exports.find = (ref) => {
  return knex
    .select('*')
    .from('personas')
    .where('ref', ref)
    .first();
}

exports.update = (ref, personas) => {
  return knex('personas')
    .update(personas)
    .update('updated_at', knex.fn.now())
    .where('ref', ref);
}