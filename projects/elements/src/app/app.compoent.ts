import {
  Component,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  Injector,
} from '@angular/core';
import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { componentsList } from 'components'; // ComponentModule,

@Component({
  selector: 'app-test',
  template: ` <h1>22222</h1> `,
})
export class TestComponent {}

@Component({
  selector: 'app-root',
  template: ` <h1>1111</h1> `,
})
export class AppComponent implements AfterViewInit {
  constructor(
    private overlay: Overlay // private overlayContainer: OverlayContainer, // private injector: Injector,
  ) // private componentFactoryResolver: ComponentFactoryResolver
  {}
  ngAfterViewInit() {
    let _overlayRef = this.overlay.create();
    let cRef = new ComponentPortal(componentsList[0]);

    let c = _overlayRef.attach(cRef);
    c.instance.list = [1, 2, 3, 4, 5];

    // const factory = this.componentFactoryResolver.resolveComponentFactory(
    //   TestComponent
    // );
    // const cRef = factory.create(
    //   this.injector,
    //   [],
    //   this.overlayContainer.getContainerElement()
    // );
  }
}
