import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OSA-eignungstool';
  currentPage = 'Startseite';
  progressPercent = new BehaviorSubject<number>(0)

  ngOnInit() {
    this.progressPercent.subscribe(progress => {
      const element = document.getElementById('progress-bar-fill')
      if (element){
        element.style.width = `${progress}%`
      }
    })
  }

  add(amount: number) {
    let val = this.progressPercent.value + amount
    if (val > 100) {
      this.progressPercent.next(100)
    } else {
      this.progressPercent.next(val)
    }
  }
}
