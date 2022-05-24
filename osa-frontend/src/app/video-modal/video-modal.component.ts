import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal.service';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'molla-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})

export class VideoModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private modalService: ModalService, private sanitizer: DomSanitizer) {
  }

  url!: string;

  faClose = faClose

  ngOnInit(): void {
    console.log(this.url, "im the url");
  }

  closeModal() {
    this.activeModal.close();
    this.modalService.modalClosedEvent()
  }

  videoUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }


}
