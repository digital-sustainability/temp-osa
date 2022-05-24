import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal.service';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molla-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})

export class VideoModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private modalService: ModalService) {
  }

  faClose = faClose

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
    this.modalService.modalClosedEvent()
  }
}