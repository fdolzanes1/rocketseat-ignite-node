import { CategoriesRepository } from "../repositories/categories.repository";
import { ICategoriesRepository } from "../repositories/Icategories.repository";

interface IRequest {
	name: string; 
	description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
	
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