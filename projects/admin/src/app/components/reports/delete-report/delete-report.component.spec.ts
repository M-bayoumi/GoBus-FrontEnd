import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReportComponent } from './delete-report.component';

describe('DeleteReportComponent', () => {
  let component: DeleteReportComponent;
  let fixture: ComponentFixture<DeleteReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteReportComponent]
    });
    fixture = TestBed.createComponent(DeleteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
