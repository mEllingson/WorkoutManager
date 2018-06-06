export class ExerciseSetLayout {
  workingSet: boolean;
  reps: number;
  percentage: number;

  constructor(reps: number, percentage: number, workingSet: boolean = true) {
    this.workingSet = workingSet;
    this.reps = reps;
    this.percentage = percentage;
  }
}
