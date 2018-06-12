import { ExerciseSet } from './exercise-set';
import { ExerciseSetLayout } from './exercise-set-layout';

export class SetCalculator {
  getSets(trainingMax: number, percentages?: ExerciseSetLayout[]) {
    const sets: ExerciseSet[] = [];

    if (percentages != null) {
      percentages.forEach(setLayout => {
        const set: ExerciseSet = {
          reps: setLayout.reps,
          weight: this.calculateWeight(trainingMax, setLayout.percentage),
          percentOfTrainingMax: setLayout.percentage
        };
        sets.push(set);
      });
    }
    return sets;
  }

  private calculateWeight(trainingMax: number, percentage: number) {
    const unrounded = trainingMax * (percentage / 100);
    return Math.floor(unrounded / 5) * 5;
  }
}
