import { Router } from 'express'
import { PostgresCategoriesRepository } from '../repositories/PostgresCategories.repository';
import { CreateCategoryService } from '../service/CreateCategory.service';

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoriesRepository();

const path = "/categories"

categoriesRoutes.post(path, (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({name, description});
  return res.status(201).send();
});

categoriesRoutes.get(path, (req, res) => {
  const allCategories = categoriesRepository.list();
  return res.status(200).json({ allCategories });
});

export { categoriesRoutes }
