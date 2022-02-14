import { constructor } from "express";
import { CategoriesRepository } from "../repositories/categories.repository";

interface IRequest {
	name: string; 
	description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
	
  execute({name, description}:IRequest) {
    const categoriesRepository = new CategoriesRepository();
	  const categoryAlreadyExists = this.categoriesRepository.findByName(name);
      
    if(categoryAlreadyExists){
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description});
	}
}

export { CreateCategoryService  }