import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from './video-modal/video-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  private modalOption3: NgbModalOptions = {
    centered: true,
    size: 'xl',
    scrollable: false,
    windowClass: "vb-modal",
    // beforeDismiss: async () => {
    //   document.querySelector('body')?.classList.remove('modal-open');

    //   await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve('success');
    //     }, 300)
    //   });

    //   (document.querySelector('.logo') as HTMLElement).focus({ preventScroll: true });

    //   return true;
    // }
  };

  showVideoModal() {
    this.modalService.open(
      VideoModalComponent,
      this.modalOption3
    )
  }


}
