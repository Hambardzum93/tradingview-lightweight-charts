import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsChartComponent } from './standards-chart.component';

describe('StandartChartComponent', () => {
  let component: StandardsChartComponent;
  let fixture: ComponentFixture<StandardsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
