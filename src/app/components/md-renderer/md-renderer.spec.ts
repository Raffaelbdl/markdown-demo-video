import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdRenderer } from './md-renderer';

describe('MdRenderer', () => {
  let component: MdRenderer;
  let fixture: ComponentFixture<MdRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdRenderer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
