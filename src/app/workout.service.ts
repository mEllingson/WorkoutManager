import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Exercise } from './Exercise';
import { ExerciseSet } from './ExerciseSet';
import { SetCalculator } from './setCalculator';
import { ExerciseSetLayout } from './ExerciseSetLayout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  constructor() {}

  getWorkout(): Observable<Exercise[]> {
    const calc = new SetCalculator();

    const squatLayouts: ExerciseSetLayout[] = [
      new ExerciseSetLayout(5, 65),
      new ExerciseSetLayout(5, 70),
      new ExerciseSetLayout(5, 75),
      new ExerciseSetLayout(3, 80),
      new ExerciseSetLayout(1, 85)
    ];
    const exercise1: Exercise = {
      exerciseName: 'Squats',
      trainingMax: 275,
      sets: calc.getSets(275, squatLayouts)
    };

    const deadliftLayouts: ExerciseSetLayout[] = [
      new ExerciseSetLayout(5, 50),
      new ExerciseSetLayout(5, 60),
      new ExerciseSetLayout(5, 70),
      new ExerciseSetLayout(3, 80),
      new ExerciseSetLayout(1, 90)
    ];

    const exercise2: Exercise = {
      exerciseName: 'Deadlift',
      trainingMax: 315,
      sets: calc.getSets(315, deadliftLayouts)
    };

    const exercise3 = new Exercise('Bench Press', 225, squatLayouts);
    const workout: Exercise[] = [exercise1, exercise2, exercise3];

    return of(workout);
  }
}
