import { NgElement, WithProperties } from '@angular/elements';

declare global {
  interface HTMLElementTagNameMap {
    // 'lib-components': NgElement & WithProperties<ComponentsComponent>;
  }
}
