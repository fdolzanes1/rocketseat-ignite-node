import { Category } from "../models/category.model";
import { ICategoriesRepository, ICreateCategoryDTO } from "./Icategories.repository";

class PostgresCategoriesRepository implements ICategoriesRepository { 
  create({ name, description }: ICreateCategoryDTO ): void {
    console.log(name, description);
    return null;
  }

  list(): Category[] {
    return null;
  }

  findByName(name: string): Category {
    console.log(name);
    return null;
  }
}

export { PostgresCategoriesRepository }
