import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-modal-grupo',
  templateUrl: './modal-grupo.component.html',
  styleUrls: ['./modal-grupo.component.scss']
})
export class ModalGrupoComponent {

  closeResult: string;

  constructor(private modalService: NgbModal,
              private translate: TranslateService) {
  translate.addLangs(['en', 'es']);
  translate.setDefaultLang('es');

  const browserLang = translate.getBrowserLang();
  translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
}
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
