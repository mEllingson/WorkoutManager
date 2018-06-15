import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Exercise } from './exercise';

import { SetCalculator } from './setCalculator';
import { ExerciseSetLayout } from './exercise-set-layout';
import { WorkoutLayoutService } from './workout-layout.service';
import { ExerciseLayout } from './exercise-layout';
import { SelectListItem } from './select-list-item';

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

  getMainExerciseList(): Observable<SelectListItem[]> {
    const squat = new SelectListItem(1, 'Squat');
    const deadLift = new SelectListItem(2, 'Deadlift');
    const benchpress = new SelectListItem(3, 'Bench Press');
    const overheadPress = new SelectListItem(4, 'Overhead Press');

    const exerciseItems: SelectListItem[] = [
      squat,
      deadLift,
      benchpress,
      overheadPress
    ];
    return of(exerciseItems);
  }

  getAssistanceExerciseList(): Observable<SelectListItem[]> {
    const facepull = new SelectListItem(1, 'Facepull');
    const krocRow = new SelectListItem(2, 'Kroc Row');
    const concentrationCurl = new SelectListItem(3, 'Concentration Curl');
    const dumbellTricepExtension = new SelectListItem(
      4,
      'Dumbell Tricep Extension'
    );

    const exerciseItems: SelectListItem[] = [
      facepull,
      krocRow,
      concentrationCurl,
      dumbellTricepExtension
    ];
    return of(exerciseItems);
  }

  private getLayout(): void {
    this.workoutLayoutService
      .getLayout()
      .subscribe(workout => (this.workoutLayout = workout));
  }
}
