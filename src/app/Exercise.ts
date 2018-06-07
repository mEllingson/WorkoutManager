import { ExerciseSet } from './ExerciseSet';
import { ExerciseSetLayout } from './ExerciseSetLayout';
import { SetCalculator } from './setCalculator';

export class Exercise {
  exerciseName: string;
  trainingMax: number;
  sets: ExerciseSet[];

  constructor(
    name: string,
    trainingMax: number = 0,
    setLayouts: ExerciseSetLayout[] = null
  ) {
    this.exerciseName = name;
    this.trainingMax = trainingMax;

    if (trainingMax > 0 && setLayouts != null) {
      const calc = new SetCalculator();
      this.sets = calc.getSets(trainingMax, setLayouts);
    } else {
      this.sets = new Array<ExerciseSet>();
    }
  }
}
