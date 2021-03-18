const { Router } = require('express');
const { Medico } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const medicos = await Medico.findAll();
  res.status(200).json(medicos);
});

router.get('/:id', async (req, res) => {
  const medico = await Medico.findByPk(req.params.id);
  res.status(200).json(medico);
});

router.post('/', async (req, res) => {
  const { nome, crm, telefonefixo, telefonecelular, cep, especialidade } = req.body;
  const newMedico = Medico.create({ nome, crm, telefonefixo, telefonecelular, cep, especialidade });

  res.status(200).json({ message: 'Cadastrado com sucesso!' });
});

router.delete('/:id', async (req, res) => {
  await Medico.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: 'Excluído com sucesso!' });
});

router.put('/:id', async (req, res) => {
  const { nome, crm, telefonefixo, telefonecelular, cep, especialidade } = req.body;

  await Medico.update(
    { nome, crm, telefonefixo, telefonecelular, cep, especialidade },
    {
      where: { id: req.params.id },
    }
  );

  res.status(200).json({ message: 'Atualizado com sucesso!' });
});

module.exports = router;