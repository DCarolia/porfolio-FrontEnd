import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoYRedesComponent } from './logo-y-redes.component';

describe('LogoYRedesComponent', () => {
  let component: LogoYRedesComponent;
  let fixture: ComponentFixture<LogoYRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoYRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoYRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
