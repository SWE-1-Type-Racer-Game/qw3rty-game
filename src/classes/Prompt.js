

export class Prompt {
     constructor(promptText, correctAnswer, category, playerAnswer, isCompleted) {
        this.text = promptText;
        this.correctAnswer = correctAnswer;
        this.category = category;
        this.playerAnswer = playerAnswer;
        this.isCompleted = isCompleted;
     }

     updatePlayerAnswer(answer) {
        this.playerAnswer = answer;
     }

     clearPlayerAnswer() {
        this.playerAnswer = '';
     }

     markCompleted() {
        this.isCompleted = true;
     }
}