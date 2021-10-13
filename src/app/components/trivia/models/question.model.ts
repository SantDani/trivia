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
    this.category = question.category;
    this.correctAnswer = question.correct_answer;
    this.difficulty = question.difficulty;
    this.incorrectAnswers = question.incorrect_answers;
    this.question = question.question;
    this.type = question.type;

    this.allAnswers = question.incorrect_answers;
    this.allAnswers.push(question.correct_answer);
    // console.log('log - this model question', this);
  }

}
