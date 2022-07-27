const { Router } = require('express');
const Cat = require('../models/Cats');
const router = Router();

router
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id); //eslint-disable-line
    const cat = await Cat.getById(req.params.id);
    console.log(cat); //eslint-disable-line
    res.json(cat);
  })
  .get('/', async (req, res) => {
    // console.log(cats);
    const cats = await Cat.getAll();
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    // console.log(ids);
    res.json(ids);
  });

module.exports = router;
