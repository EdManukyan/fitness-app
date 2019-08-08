import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {StopTrainingComponent} from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit = new EventEmitter();

  public progress = 0;

  private _trainingTimer: number;

  constructor(private _dialog: MatDialog) {
  }

  ngOnInit() {
    this.startResumeTimer();
  }

  private startResumeTimer() {
    this._trainingTimer = setInterval(() => {
      this.progress += 5;
      if (this.progress === 100) {
        clearInterval(this._trainingTimer);
      }
    }, 1000);
  }

  public stopTraining() {
    clearInterval(this._trainingTimer);
    const dialogRef = this._dialog.open(StopTrainingComponent, {data: {
      progress: this.progress
      }});

    dialogRef.afterClosed().subscribe(result => {
      (result) ? this.trainingExit.emit() : this.startResumeTimer();
    });
  }

}
