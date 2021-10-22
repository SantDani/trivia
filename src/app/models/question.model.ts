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
    console.log('log - this model question', this.allAnswers);
  }


  convertSpecialChar(text: string): string{
    // console.log('log - textClear', decodeURIComponent(text) );
    return decodeURIComponent(text);
  }

  convertSpecialCharArray(text: string[]): string[]{
    return text.map(answer => this.convertSpecialChar(answer));
  }

  isCorrect(answer: string): boolean {
    return this.correctAnswer === answer;
  }
}
