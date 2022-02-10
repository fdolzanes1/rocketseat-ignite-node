import { Router } from 'express'
import { Category } from '../models/category.model'
import { CategoriesRepository } from '../repositories/categories.repository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

const path = "/categories"

categoriesRoutes.post(path, (req, res) => {
  const { name, description } = req.body;
  categoriesRepository.create({name, description});
  return res.status(201).send();
});

categoriesRoutes.get(path, (req, res) => {
  const allCategories = categoriesRepository.list();
  return res.status(200).json({ allCategories });
});

export { categoriesRoutes }
