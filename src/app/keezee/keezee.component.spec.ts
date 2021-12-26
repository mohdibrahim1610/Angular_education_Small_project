import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeezeeComponent } from './keezee.component';

describe('KeezeeComponent', () => {
  let component: KeezeeComponent;
  let fixture: ComponentFixture<KeezeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeezeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeezeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
