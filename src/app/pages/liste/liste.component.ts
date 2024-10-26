import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule, Table } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ModalCreateEditContactComponent } from '../../components/modal-create-edit-contact/modal-create-edit-contact.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [TableModule, RippleModule, ConfirmDialogModule, TooltipModule, ButtonModule, IconFieldModule, InputIconModule, ModalCreateEditContactComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  providers: [ConfirmationService, MessageService]
})
export class ListeComponent implements OnInit {
  visible: boolean = false;
  contacts: any[] = [];
  contactSelected: any;
  @ViewChild('dt1') dt1: Table | undefined;
  loading: boolean = true;
  titleModal?: string;
  sortedContacts: any[] = [];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contacts = [
      {
        id: 1,
        prenom: 'John',
        nom: 'Doe',
        telephone: '0123456789',
        email: 'john.doe@example.com'
      },
      {
        id: 2,
        prenom: 'Jane',
        nom: 'Smith',
        telephone: '9876543210',
        email: 'jane.smith@example.com'
      },
      {
        id: 3,
        prenom: 'Alice',
        nom: 'Johnson',
        telephone: '1234567890',
        email: 'alice.johnson@example.com'
      },
      {
        id: 4,
        prenom: 'Bob',
        nom: 'Brown',
        telephone: '0987654321',
        email: 'bob.brown@example.com'
      },
      {
        id: 5,
        prenom: 'Charlie',
        nom: 'Miller',
        telephone: '5432109876',
        email: 'charlie.miller@example.com'
      },
      {
        id: 6,
        prenom: 'David',
        nom: 'Wilson',
        telephone: '2345678901',
        email: 'david.wilson@example.com'
      },
      {
        id: 7,
        prenom: 'Emily',
        nom: 'Davis',
        telephone: '8765432109',
        email: 'emily.davis@example.com'
      },
      {
        id: 8,
        prenom: 'Frank',
        nom: 'Moore',
        telephone: '6789012345',
        email: 'frank.moore@example.com'
      },
      {
        id: 9,
        prenom: 'Grace',
        nom: 'Taylor',
        telephone: '3456789012',
        email: 'grace.taylor@example.com'
      },
      {
        id: 10,
        prenom: 'Hannah',
        nom: 'Anderson',
        telephone: '4321098765',
        email: 'hannah.anderson@example.com'
      }
    ];
    this.sortedContacts = this.contacts.sort((a, b) => b.id - a.id);
    this.loading = false;
  }

  confirm(event: Event, contact: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Etes-vous sûr(e) de vouloir supprimer le contact de ${contact.prenom}`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.deleteContact(contact.id);
      },
      reject: () => {
      }
    });
  }
  
  onFilter(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && this.dt1) {
      this.dt1.filterGlobal(inputElement.value, 'contains');
    }
  }

  showDialog() {
    this.visible = true;
  }

  onEdit(contact?: any) {
    this.titleModal = contact ? "Modifier un contact" : "Enregister un contact"
    this.contactSelected = contact ? { ...contact } : { id: this.contacts.length + 1, nom: '', prenom: '', telephone: '', email: '' };
    this.visible = true;
  }

  onContactUpdate(updatedContact: any) {
    if (this.contactSelected) {
      const index = this.contacts.findIndex(contact => contact.id === this.contactSelected.id);
      
      if (index !== -1) {
        this.contacts[index] = updatedContact;
      } else {
        this.contacts.push(updatedContact);
      }

      this.sortedContacts = this.contacts.sort((a, b) => b.id - a.id);
    }
  }

  deleteContact(contactId: number): void {
    const index = this.contacts.findIndex(contact => contact.id === contactId);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
}
