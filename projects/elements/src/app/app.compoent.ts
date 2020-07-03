import {
  Component,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  Injector,
  ViewChild,
  ElementRef,
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
  template: `
    <h1>1111</h1>
    <canvas #canvas></canvas>
  `,
})
export class AppComponent implements AfterViewInit {
  constructor(
    private overlay: Overlay // private overlayContainer: OverlayContainer, // private injector: Injector, // private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  @ViewChild('canvas') canvas: ElementRef;

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
    this.test();
  }

  async test() {
    let canvas = this.canvas.nativeElement as HTMLCanvasElement;
    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      let img = new Image();
      img.src = 'http://localhost:4200/assets/1.jpg';
      img.onload = () => {
        resolve(img);
      };
    });

    let { width, height } = image;

    canvas.width = width;
    canvas.height = height;

    const x = (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;

    ctx.drawImage(image, x, y, width, height);

    this.imgZip(canvas);
  }

  async imgZip(canvas: HTMLCanvasElement) {
    let blob = await new Promise<HTMLImageElement>((resolve, reject) => {
      canvas.toBlob(
        (b) => {
          resolve(b);
        },
        undefined,
        0.5
      );
    });
    console.info(blob);
    console.info(blob[0]);
  }
}
