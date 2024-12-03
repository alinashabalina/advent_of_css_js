import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarHatComponent } from './avatar-hat.component';

describe('AvatarHatComponent', () => {
  let component: AvatarHatComponent;
  let fixture: ComponentFixture<AvatarHatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarHatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
