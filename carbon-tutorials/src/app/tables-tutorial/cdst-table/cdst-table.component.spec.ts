import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstTableComponent } from './cdst-table.component';

describe('CdstTableComponent', () => {
  let component: CdstTableComponent;
  let fixture: ComponentFixture<CdstTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
