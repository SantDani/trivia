import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryModel} from "../../models/category.model";
import {TriviaService} from "../../services/trivia.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categories: CategoryModel[];
  numQuestions: number[];
  selectCategory: number;
  selectNumQuestions: number;

  constructor(private router: Router, private _trivia: TriviaService) {
    this.categories = [];
    this.numQuestions= [];
  }

  ngOnInit() {
    // console.log('log - go to game');
    // this.router.navigateByUrl('/home/game').then(null);
    this.getCategories();

    for (let i = 1; i < 31; i++) {
      this.numQuestions.push(i);
    }

  }

  goToGame(): void {
    // console.log('log - go to game');
    this.router.navigateByUrl('/game').then(null);
  }

  login(): void {
    console.log('log - login');
  }

  getCategories(): void{

    this._trivia.getCategories().subscribe( (categories: any) => {

      // this.categories = categories.trivia_categories.map(category => new CategoryModel(category));
      this.categories = categories.trivia_categories;
      // console.log('log - this.categories ', this.categories );
    } );
  }

  getCategorySelected(): void {
    // const option = this.selectOption;
    // this.categoryActual = this.selectOption;
    this._trivia.setCategory(this.selectCategory);
    // console.log('option selected', this.categoryActual);

  }

  getNumQuestions() {
    this._trivia.setNumQuestions(this.selectNumQuestions);
  }
}
