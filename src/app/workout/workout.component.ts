import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Exercise } from '../exercise';
import { ExerciseSet } from '../exercise-set';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  workout: Exercise[];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.getWorkout();
  }

  getWorkout(): void {
    this.workoutService
      .getWorkout()
      .subscribe(workout => (this.workout = workout));
  }
}
