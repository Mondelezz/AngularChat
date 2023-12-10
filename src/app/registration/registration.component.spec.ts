import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAndAuthComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegAndAuthComponent;
  let fixture: ComponentFixture<RegAndAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegAndAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegAndAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
