import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faPlay = faPlay;

  modal = false

  constructor(protected modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.getModalActive().subscribe(() => {
      setTimeout(() => { // needed else the css animation bugs out for the welcome video
        this.modal = false
      }, 10)
    })
  }

  showVideoModal(event: Event) {
    this.modal = true
    event.preventDefault();
    this.modalService.showVideoModal('https://mediaspace.bfh.ch/embed/secure/iframe/entryId/0_wpc9vz3a/uiConfId/23488891');
  }

}
