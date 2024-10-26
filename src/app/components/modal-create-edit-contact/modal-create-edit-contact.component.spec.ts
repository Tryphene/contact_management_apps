import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEditContactComponent } from './modal-create-edit-contact.component';

describe('ModalCreateEditContactComponent', () => {
  let component: ModalCreateEditContactComponent;
  let fixture: ComponentFixture<ModalCreateEditContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateEditContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
