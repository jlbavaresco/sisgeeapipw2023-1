const { Router } = require('express');

const { getPredios, addPredio, updatePredio,
     deletePredio, getPredioPorCodigo } = require('../controllers/prediosController')

const { getSalas, addSala, updateSala, deleteSala, getSalaPorCodigo }
     = require('../controllers/salasController');

const { getEquipamentoPorSala, addEquipamento, updateEquipamento,
     deleteEquipamento, getEquipamentoPorCodigo } =
     require('../controllers/equipamentosController');

const rotas = new Router();

rotas.route('/predios')
     .get(getPredios)
     .post(addPredio)
     .put(updatePredio);

rotas.route('/predios/:codigo')
     .get(getPredioPorCodigo)
     .delete(deletePredio);

rotas.route('/salas')
     .get(getSalas)
     .post(addSala)
     .put(updateSala);

rotas.route('/salas/:codigo')
     .get(getSalaPorCodigo)
     .delete(deleteSala);

rotas.route('/equipamentos/sala/:codigosala')
     .get(getEquipamentoPorSala)

rotas.route('/equipamentos')
     .post(addEquipamento)
     .put(updateEquipamento);

rotas.route('/equipamentos/:codigo')
     .get(getEquipamentoPorCodigo)
     .delete(deleteEquipamento);     

module.exports = rotas;