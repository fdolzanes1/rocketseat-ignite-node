import { Category } from "../models/Category.model";
import { ICategoriesRepository, ICreateCategoryDTO } from "./Icategories.repository";

class PostgresCategoriesRepository implements ICategoriesRepository {

  create({ name, description }: ICreateCategoryDTO ): void {
    return null
  }

  list(): Category[] {
    return null;
  }

  findByName(name: string): Category {
    return null;
  }
}

export { PostgresCategoriesRepository }
