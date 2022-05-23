import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { slideInAnimation } from "./animation";
import { ChildrenOutletContexts, NavigationStart, Router } from "@angular/router";
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'OSA-eignungstool';
  currentPage = 'Startseite';
  progressPercent = new BehaviorSubject<number>(0)

  images: string[] = []

  active = false

  constructor(protected dataService: DataService, private contexts: ChildrenOutletContexts, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        const currentImages = this.dataService.getCurrentImages()
        const allImages = this.dataService.getImageList()
        const newImages: number[] = []
        for (let i = 0; i < 4; i += 1) {
          let notValidImage = true
          while (notValidImage) {
            debugger
            const idx = this.getRandomInt(allImages.length)
            if (!currentImages.includes(idx) && !newImages.includes(idx)) {
              newImages.push(idx)
              notValidImage = false
            }
          }
        }
        this.dataService.setCurrentImages(newImages);
        this.images = []
        for (const img of newImages) {
          this.images.push(allImages[img])
        }
      }
    });
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit() {
    this.progressPercent.subscribe(progress => {
      const element = document.getElementById('progress-bar-fill')
      if (element) {
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

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
