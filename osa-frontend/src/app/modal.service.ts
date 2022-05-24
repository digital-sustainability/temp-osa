import { Injectable } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { VideoModalComponent } from './video-modal/video-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  private modalClosed = new Subject()

  modalInstance!: NgbModalRef

  private modalOption3: NgbModalOptions = {
    centered: true,
    size: 'xl',
    scrollable: false,
    windowClass: "vb-modal",
    backdrop: "static",
    keyboard: false

  };

  showVideoModal(url: string) {
    const modalRef = this.modalService.open(
      VideoModalComponent,
      this.modalOption3
    )
    modalRef.componentInstance.url = url
  }

  modalClosedEvent() {
    this.modalClosed.next("closed")
  }

  getModalActive() {
    return this.modalClosed
  }




}
