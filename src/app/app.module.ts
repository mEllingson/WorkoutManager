import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutLayoutService } from './workout-layout.service';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [AppComponent, WorkoutComponent, ExerciseComponent],
  imports: [BrowserModule, FormsModule],
  providers: [WorkoutLayoutService],
  bootstrap: [AppComponent]
})
export class AppModule {}
