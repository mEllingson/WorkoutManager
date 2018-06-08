import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Exercise } from './exercise';

import { SetCalculator } from './setCalculator';
import { ExerciseSetLayout } from './exercise-set-layout';
import { WorkoutLayoutService } from './workout-layout.service';
import { ExerciseLayout } from './exercise-layout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  workoutLayout: ExerciseLayout[];

  constructor(private workoutLayoutService: WorkoutLayoutService) {}

  getWorkout(): Observable<Exercise[]> {
    const calc = new SetCalculator();

    this.getLayout();
    const workout: Exercise[] = [];
    this.workoutLayout.forEach(exLayout => {
      const exercise: Exercise = {
        exerciseName: exLayout.exerciseName,
        trainingMax: exLayout.trainingMax,
        sets: calc.getSets(exLayout.trainingMax, exLayout.exerciseSetLayout)
      };
      workout.push(exercise);
    });
    return of(workout);
  }

  private getLayout(): void {
    this.workoutLayoutService
      .getLayout()
      .subscribe(workout => (this.workoutLayout = workout));
  }
}
