export class CategoryModel {
  id: number;
  name: string;

  constructor(category: CategoryModel) {
    this.id = category.id;
    this.name = category.name;

  }

}
