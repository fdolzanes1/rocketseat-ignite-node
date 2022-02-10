import { Router } from 'express'
import { Category } from '../models/category.model'

const categoriesRoutes = Router()

const path = "/categories"

const categories:Category[] = []

categoriesRoutes.post(path, (req, res) => {
  const { name, description } = req.body;

  const category = new Category();
  
  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  });

  categories.push(category);
  return res.status(201).send();
});

categoriesRoutes.get(path, (req, res) => {
  return res.status(200).send({ categories });
});

export { categoriesRoutes }
