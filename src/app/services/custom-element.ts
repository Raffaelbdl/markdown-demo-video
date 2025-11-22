import { inject, Injectable, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TestMd } from '../components/test-md/test-md';

@Injectable({
  providedIn: 'root',
})
export class CustomElement {
  private readonly injector = inject(Injector);
  public setupCustomElements() {
    const testMdElement = createCustomElement(TestMd, { injector: this.injector });
    customElements.define('test-md', testMdElement);
  }
}
