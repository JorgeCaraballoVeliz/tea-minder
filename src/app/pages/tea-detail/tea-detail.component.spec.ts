import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaDetailComponent } from './tea-detail.component';

describe('TeaDetailComponent', () => {
  let component: TeaDetailComponent;
  let fixture: ComponentFixture<TeaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeaDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
