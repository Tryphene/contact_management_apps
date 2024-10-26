import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal-create-edit-contact',
  standalone: true,
  imports: [DialogModule, FormsModule, ButtonModule],
  templateUrl: './modal-create-edit-contact.component.html',
  styleUrl: './modal-create-edit-contact.component.css'
})
export class ModalCreateEditContactComponent implements OnInit, OnChanges {
  @Input() visible: boolean = false;
  @Input() currentContact: any = { nom: '', prenom: '', telephone: '', email: '' };
  @Input() modalTitle?: string;
  @Output() currentContactChange = new EventEmitter<any>();
  @Output() closeDialog = new EventEmitter<boolean>();

  formData = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
  };
  
  formDataErrors: {
    email?: string,
    nom?: string,
    prenom?: string,
    telephone?: string,
  } = {};

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentContact']) {
      if (this.currentContact) {
      
        this.formData = this.currentContact;
      }
    }
  }

  isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.keyCode ? event.keyCode : event.which;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  save() {
    console.log(this.formData);
    const errors: {
      nom?: string,
      prenom?: string,
      email?: string,
      adresse?: string,
      telephone?: string,
    } = {};

    if (this.formData.nom === "") {
      errors.nom = "Le nom est requis.";
    }

    if (this.formData.prenom === "") {
      errors.prenom = "Le(s) prenom(s) est/sont requis.";
    }

    if (this.formData.email === "") {
      errors.email = "L'email est requise.";
    } else if (!this.isValidEmail(this.formData.email)) {
      errors.email = "Veuillez saisir un format d'email correcte.";
    }

    if (this.formData.telephone === "") {
      errors.telephone = "Le numéro de téléphone est requis.";
    } else if (this.formData.telephone.length < 10) {
      errors.telephone = "Veuillez saisir les 10 chiffres svp!";
    }

    if (Object.keys(errors).length > 0) {
      this.formDataErrors = errors;
    } else {
      this.formDataErrors = {}
      this.currentContactChange.emit(this.formData);
      this.onHide();
    }
  }

  onHide(): void {
    this.closeDialog.emit(false);
    this.formDataErrors = {}
  }
}
