import { Router } from 'express'
import { v4 as uuid4 } from 'uuid'

const categoriesRoutes = Router()

const path = "/categories"

const categories = []

categoriesRoutes.post(path, (req, res) => {
  const { name, description } = req.body;

  const category = {
    name, 
    description, 
    id: uuid4()
  };

  categories.push(category);
  return res.status(201).send();
});

categoriesRoutes.get(path, (req, res) => {
  return res.status(200).send({ categories });
});

export { categoriesRoutes }
