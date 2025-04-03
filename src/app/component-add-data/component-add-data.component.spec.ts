import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAddDataComponent } from './component-add-data.component';

describe('ComponentAddDataComponent', () => {
  let component: ComponentAddDataComponent;
  let fixture: ComponentFixture<ComponentAddDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAddDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
