import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassNgTemplateViaInputBindingComponent } from './pass-ng-template-via-input-binding.component';

describe('PassNgTemplateViaInputBindingComponent', () => {
  let component: PassNgTemplateViaInputBindingComponent;
  let fixture: ComponentFixture<PassNgTemplateViaInputBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassNgTemplateViaInputBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassNgTemplateViaInputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
