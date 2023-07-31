import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatygoryAddComponent } from './catygory-add.component';

describe('CatygoryAddComponent', () => {
  let component: CatygoryAddComponent;
  let fixture: ComponentFixture<CatygoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatygoryAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatygoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
