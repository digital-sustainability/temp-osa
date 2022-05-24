import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private currentImages: number[] = [];

  private images = [
    'bank.jpeg',
    'blind.jpg',
    'books.jpg',
    'depressed.jpg',
    'group.jpg',
    'grouplawn.jpg',
    'groupstudy.jpg',
    'lawngroup.jpg',
    'lawnparty.jpg',
    'leaving.jpg',
    'party.jpg',
    'pencils.jpeg',
    'presentation.jpg',
    'rechner.jpg',
    'smolchair.jpg',
    'starbucks.jpg',
    'studentin.jpg',
    'studying.jpg',
    'tisch.jpg',
    'viewparty.jpg',
    'wheel.jpg',
    'wide.jpg',
    'womanbag.jpg',
    'womanlibrary.jpg',
    'writing.jpg',
  ];

  getCurrentImages() {
    return this.currentImages;
  }

  getImageList() {
    return this.images;
  }

  setCurrentImages(images: number[]) {
    this.currentImages = images;
  }

}
