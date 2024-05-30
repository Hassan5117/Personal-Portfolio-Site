import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCurricularsComponent } from './extra-curriculars.component';

describe('ExtraCurricularsComponent', () => {
  let component: ExtraCurricularsComponent;
  let fixture: ComponentFixture<ExtraCurricularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraCurricularsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtraCurricularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
