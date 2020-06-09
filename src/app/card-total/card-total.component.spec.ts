import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTotalComponent } from './card-total.component';

describe('CardTotalComponent', () => {
  let component: CardTotalComponent;
  let fixture: ComponentFixture<CardTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
