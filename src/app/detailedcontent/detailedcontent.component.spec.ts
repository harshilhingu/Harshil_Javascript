import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedcontentComponent } from './detailedcontent.component';

describe('DetailedcontentComponent', () => {
  let component: DetailedcontentComponent;
  let fixture: ComponentFixture<DetailedcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
