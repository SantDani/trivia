import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})


export class TriviaService {

  numQuestions: number;
  categories: CategoryModel[];
  categoryActual: number;
  readonly API_TRIVIA = `https://opentdb.com/api.php?`;
  readonly API_TRIVIA_CATEGORY = `https://opentdb.com/api_category.php`;

  constructor(private http: HttpClient) {

    this.numQuestions = 10;
    this.categoryActual = 0;
  }

  getQuestions(): Observable<any>{

    const url = `${this.API_TRIVIA}amount=${this.numQuestions}&type=multiple&encode=url3986&category=${this.categoryActual}`;
    return this.http.get<any>(url);
  }

  getCategories(): Observable<any>{

    return this.http.get<any>(this.API_TRIVIA_CATEGORY);
  }

  setCategory(categoryID: number): void{
    this.categoryActual = categoryID;
    // console.log('log - this.categoryActual', this.categoryActual)
  }

  setNumQuestions(numQuestions: number): void{
    this.numQuestions = numQuestions;
  }
}
