/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('personas').del()
  .then(function () {
    // Inserts seed entries
    return knex('personas').insert([
    {id: 1, ref: '1234',nombre:'Andy',telefono:'020',email:'jajjaa@hah.com',boleto:'97766'},
    {id: 2, ref: '1836',nombre:'Oscar',telefono:'300',email:'jmaaka@hah.com',boleto:'21735'},
    {id: 3, ref: '1833',nombre:'Cass',telefono:'400',email:'jkakak@hah.com',boleto:'11922'},
    {id: 4, ref: '2938',nombre:'',telefono:'',email:'',boleto:'18373'},
    {id: 5, ref: '0183',nombre:'',telefono:'',email:'',boleto:'92736'},
    {id: 6, ref: '9183',nombre:'',telefono:'',email:'',boleto:'19371'}

  ]);
});
};
