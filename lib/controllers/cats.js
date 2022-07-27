const { Router } = require('express');
const Cats = require('../models/Cats');


module.exports = Router() 
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const catById = await Cats.getById(id);
    res.json(catById);
  })

  .get('/', async (req, res) => {
    const catInfo = await Cats.getAll();
    res.json(catInfo);
  });
