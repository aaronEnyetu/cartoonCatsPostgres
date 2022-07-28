const { Router } = require('express');
const Cats = require('../models/Cat');
const router = Router();

router
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id); //eslint-disable-line
    const cat = await Cats.getById(req.params.id);
    console.log(cat); //eslint-disable-line
    res.json(cat);
  })
  .get('/', async (req, res) => {
    // console.log(cats);
    const cats = await Cats.getAll();
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    // console.log(ids);
    res.json(ids);
  });

module.exports = router;
