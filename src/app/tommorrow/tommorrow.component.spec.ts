import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TommorrowComponent } from './tommorrow.component';

describe('TommorrowComponent', () => {
  let component: TommorrowComponent;
  let fixture: ComponentFixture<TommorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TommorrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TommorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
