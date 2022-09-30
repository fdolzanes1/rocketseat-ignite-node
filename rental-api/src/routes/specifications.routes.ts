import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/Specifications.repository';
import { CreateSpecificationService } from '../modules/cars/service/CreateSpecification.service';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

const path = "/specifications"

specificationsRoutes.post(path, (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(specificationsRepository);
  createSpecificationService.execute({name, description});
  return res.status(201).send();
});

specificationsRoutes.get(path, (req, res) => {
  const allSpecifications = specificationsRepository.list();
  return res.status(200).json({ allSpecifications });
});

export { specificationsRoutes }
