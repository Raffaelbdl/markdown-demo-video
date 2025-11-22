import { TestBed } from '@angular/core/testing';

import { CustomElement } from './custom-element';

describe('CustomElement', () => {
  let service: CustomElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomElement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
