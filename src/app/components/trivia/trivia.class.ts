import {QuestionModel} from './models/question.model';

export class TriviaClass {

  questions: QuestionModel[];

  constructor(responseQuestions: any) {
    this.questions = [];
    // questions.forEach( question => question(new QuestionModel(question)));

    // console.log('log - questions in trivia Class', responseQuestions);
    responseQuestions.results.forEach( question => this.questions.push(new QuestionModel(question)));
  }
}
