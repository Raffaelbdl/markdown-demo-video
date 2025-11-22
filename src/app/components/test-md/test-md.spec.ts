import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMd } from './test-md';

describe('TestMd', () => {
  let component: TestMd;
  let fixture: ComponentFixture<TestMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
