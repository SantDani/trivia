export class QuestionModel{
  category: string;
  correctAnswer: string;
  difficulty: string;
  incorrectAnswers: string[];
  question: string;
  type: string;
  allAnswers: string[];

  constructor(question) {
    // console.log('log - in question model', question);


    this.category = this.convertSpecialChar(question.category);
    this.correctAnswer = this.convertSpecialChar(question.correct_answer);
    this.difficulty = question.difficulty;
    this.incorrectAnswers = this.convertSpecialCharArray(question.incorrect_answers);
    this.question = this.convertSpecialChar(question.question);
    this.type = question.type;

    this.allAnswers = this.convertSpecialCharArray(question.incorrect_answers);;
    this.allAnswers.push(this.correctAnswer);

    this.allAnswers = this.getQuestionsRandom();
    // console.log('log - this model question', this.allAnswers);
  }


  convertSpecialChar(text: string): string{
    // console.log('log - textClear', decodeURIComponent(text) );
    return decodeURIComponent(text);
  }

  convertSpecialCharArray(text: string[]): string[]{
    return text.map(answer => this.convertSpecialChar(answer));
  }

  isCorrect(answer: string): boolean {
    // console.log('log - answer', answer);
    return this.correctAnswer === answer;
  }

  /**
   *
   * Math.random() - 0.5: returns a value between -0.5 and 0.5
   *
   * If the result of this operation is < 0, the element a is put to an index lower than b,
   * and the opposite if the result is > 0.
   */
  private getQuestionsRandom(): string[]{

    // const randomQuestions = this.allAnswers.sort(() => Math.floor(Math.random() - 0.5));
    // console.log('log - randomQuestions', randomQuestions);
    // console.log('log - correctAnswer', this.correctAnswer);
    return this.allAnswers.sort(() => Math.floor(Math.random() - 0.5));;
  }

  public getQuestions(): string[]{
    return this.getQuestions();
  }
}
