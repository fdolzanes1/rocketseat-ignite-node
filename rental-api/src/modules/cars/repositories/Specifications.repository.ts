import { Specification } from "../models/Specification.model";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "./ISpecifications.repository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  
  constructor() {
    this.specifications = [];
  }

  create({ name, description } : ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      create_at: new Date(),
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(category => category.name === name);
    return specification;
  }
}

export { SpecificationsRepository }