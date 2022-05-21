import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected modalService: ModalService) { }

  ngOnInit(): void {
  }

  showVideoModal(event: Event) {
    event.preventDefault();
    this.modalService.showVideoModal();
  }

}
