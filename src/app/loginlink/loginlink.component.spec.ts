import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlinkComponent } from './loginlink.component';

describe('LoginlinkComponent', () => {
  let component: LoginlinkComponent;
  let fixture: ComponentFixture<LoginlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
