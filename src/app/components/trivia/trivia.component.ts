import { Component, OnInit } from '@angular/core';
import {TriviaService} from '../../services/trivia.service';
import {TriviaClass} from './trivia.class';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss'],
})


export class TriviaComponent implements OnInit {
  trivia: TriviaClass;
  questionActual: number;
  totalQuestions: number;
  questionsIncorrect: number;
  questionsCorrect: number;

  showResults: boolean;

  constructor(private _trivia: TriviaService) {
    this.trivia = null;
    this.questionActual = -1;
    this.totalQuestions = -1;
    this.showResults = false;

    this.questionsCorrect = -1;
    this.questionsIncorrect = -1;


  }

  ngOnInit() {
    this.initGame();
  }

  private initGame() {
    this._trivia.getQuestions().subscribe((questions: any) => {
      console.log('log - data', questions);

      this.trivia = new TriviaClass(questions);

      if (this.trivia == null) {
        console.error('Error trivia empty or null');
        return;
      }

      this.questionActual = 0;
      this.totalQuestions = this.trivia.questions.length;
      this.questionsCorrect = 0;
      this.questionsIncorrect = 0;

    });
  }

  private answerQuestion(answer: string): void {



    if(this.trivia.questions[this.questionActual].correctAnswer === answer){
      console.log('log - correct');
      this.questionsCorrect++;
    }else{
      console.log('log - incorrect');
      this.questionsIncorrect++;
    }


    if(this.questionActual >= this.totalQuestions-1){
      // end game
      console.log('log - end game');
      this.showResults = true;
      return;
    }
    this.questionActual++;

  }

  private playAgain(): void {
    this.initGame();
    this.trivia = null;
    this.showResults = false;
  }
}
