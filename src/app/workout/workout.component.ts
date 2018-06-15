import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Exercise } from '../exercise';
import { ExerciseSet } from '../exercise-set';
import { SelectListItem } from '../select-list-item';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  workout: Exercise[];
  newExercise: Exercise = new Exercise('');
  mainExerciseList: SelectListItem[];
  assistanceExerciseList: SelectListItem[];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.getSelectLists();
    this.getWorkout();
  }

  getWorkout(): void {
    this.workoutService
      .getWorkout()
      .subscribe(workout => (this.workout = workout));
  }

  getSelectLists(): void {
    this.workoutService
      .getMainExerciseList()
      .subscribe(
        mainExerciseList => (this.mainExerciseList = mainExerciseList)
      );

    this.workoutService
      .getAssistanceExerciseList()
      .subscribe(
        assistanceExerciseList =>
          (this.assistanceExerciseList = assistanceExerciseList)
      );
  }

  addExercise() {
    this.newExercise = new Exercise('');
  }

  get diagnostic() {
    return JSON.stringify(this.newExercise);
  }
}
