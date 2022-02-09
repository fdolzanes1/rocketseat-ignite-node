import { Router } from 'express'

const categoriesRoutes = Router()

const path = "/categories"

const categories = []

categoriesRoutes.post(path, (req, res) => {
  const { name, description } = req.body;

  categories.push({name, description})
  return res.status(201).send();
});

categoriesRoutes.get(path, (req, res) => {
  return res.status(200).send({ categories });
});

export { categoriesRoutes }
