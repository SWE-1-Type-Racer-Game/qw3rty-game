export class Prompt {
     constructor(text, correctAnswer, category, isCompleted) {
        this.text = text;
        this.correctAnswer = correctAnswer;
        this.category = category;
        this.isCompleted = isCompleted;
     }

     markCompleted() {
        this.isCompleted = true;
     }
}