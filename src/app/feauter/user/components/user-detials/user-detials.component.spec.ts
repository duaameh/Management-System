import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetialsComponent } from './user-detials.component';

describe('UserDetialsComponent', () => {
  let component: UserDetialsComponent;
  let fixture: ComponentFixture<UserDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
