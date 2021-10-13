import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TriviaService {

  readonly API_TRIVIA = 'https://opentdb.com/api.php?amount=3&type=multiple';
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any>{
    return this.http.get<any>(this.API_TRIVIA);
  }
}
