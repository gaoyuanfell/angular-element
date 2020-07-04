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
import { DomSanitizer } from '@angular/platform-browser';

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
    <canvas #canvas2></canvas>
    <div *ngIf="src">
      <img [src]="src" />
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  constructor(
    private sanitizer: DomSanitizer,
    private overlay: Overlay // private overlayContainer: OverlayContainer, // private injector: Injector, // private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('canvas2') canvas2: ElementRef;
  src;

  ngAfterViewInit() {
    // let _overlayRef = this.overlay.create();
    // let cRef = new ComponentPortal(componentsList[0]);

    // let c = _overlayRef.attach(cRef);
    // c.instance.list = [1, 2, 3, 4, 5];

    // const factory = this.componentFactoryResolver.resolveComponentFactory(
    //   TestComponent
    // );
    // const cRef = factory.create(
    //   this.injector,
    //   [],
    //   this.overlayContainer.getContainerElement()
    // );
    this.test();
    // this.test2();
  }

  async test2() {
    let canvas2 = this.canvas2.nativeElement as HTMLCanvasElement;
    let ctx2 = canvas2.getContext('2d') as CanvasRenderingContext2D;
    let [width, height] = [400, 800];

    let bo = true;

    let y = 1;
    let cd = ctx2.createImageData(width, height);
    let cd2 = ctx2.createImageData(width / 2, height / 2);
    for (let index = 0; index < cd.data.length; index += 8) {
      // bo = !bo;
      cd2.data[index / 2] = bo ? 0 : 255;
      cd2.data[index / 2 + 1] = bo ? 0 : 255;
      cd2.data[index / 2 + 2] = bo ? 0 : 255;
      cd2.data[index / 2 + 3] = 255;

      y++;
    }

    console.info(cd2.data.buffer);
    console.info(new DataView(cd2.data.buffer).buffer);

    canvas2.width = width;
    canvas2.height = height;

    ctx2.putImageData(cd2, 0, 0);

    // let blob = new Blob([cd.data.buffer]);

    // let img = new Image();
    // img.src = URL.createObjectURL(blob);

    // document.body.appendChild(img);

    // this.src = URL.createObjectURL(blob); // this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  }

  async test() {
    let canvas = this.canvas.nativeElement as HTMLCanvasElement;
    let canvas2 = this.canvas2.nativeElement as HTMLCanvasElement;
    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    let ctx2 = canvas2.getContext('2d') as CanvasRenderingContext2D;

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
    canvas2.width = width / 2;
    canvas2.height = height / 2;

    const x = (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;

    ctx.drawImage(image, x, y, width, height);

    let cd = ctx2.createImageData(width / 2, height / 2);

    let iamgeData = ctx.getImageData(0, 0, width, height);
    console.info(iamgeData.data.length);
    for (let i = 0; i < iamgeData.data.length; i += 8) {
      // let avg =
      //   (iamgeData.data[i + 0] +
      //     iamgeData.data[i + 1] +
      //     iamgeData.data[i + 2]) /
      //   3;

      // cd.data[i + 0] = avg;
      // cd.data[i + 1] = avg;
      // cd.data[i + 2] = avg;
      // cd.data[i + 3] = iamgeData.data[i + 3];

      cd.data[i + 0 - +0] = iamgeData.data[i + 0];
      cd.data[i / 2 + 1] = iamgeData.data[i + 1];
      cd.data[i / 2 + 2] = iamgeData.data[i + 2];
      cd.data[i / 2 + 3] = iamgeData.data[i + 3];

      // if (i % (width * 4) === 0) {
      //   console.info(
      //     iamgeData.data[i + 0],
      //     iamgeData.data[i + 1],
      //     iamgeData.data[i + 2],
      //     iamgeData.data[i + 3]
      //   );
      // }
    }

    // for (let index = 0; index < cd.data.length; index += 4) {
    //   cd.data[index] = 0;
    //   cd.data[index + 1] = 0;
    //   cd.data[index + 2] = 0;
    //   cd.data[index + 3] = 255;
    // }

    ctx2.putImageData(new ImageData(cd.data, width / 2, height / 2), 0, 0);

    // let dataURL = canvas.toDataURL(undefined, 0.92);
    // let arr = dataURL.split(',');
    // let mime;
    // let _mime = arr[0].match(/:(.*?);/);
    // if (_mime) mime = _mime[1];
    // let bstr = atob(arr[1]);
    // let n = bstr.length;
    // let uint8Array = new Uint8Array(n);
    // while (n--) {
    //   uint8Array[n] = bstr.charCodeAt(n);
    // }

    // console.info(mime);

    // let blob = new Blob([uint8Array], { type: mime });
    // let url = URL.createObjectURL(blob);
    // console.info(url);

    // this.imgZip(canvas);
  }

  async imgZip(
    canvas: HTMLCanvasElement,
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ) {
    let { width, height } = canvas;
    let imageData = ctx.createImageData(width, height);
    let canvasData = imageData.data;

    // let dataURL = canvas.toDataURL();
    // let arr = dataURL.split(',');
    // let mime;
    // let _mime = arr[0].match(/:(.*?);/);
    // if (_mime) mime = _mime[1];
    // let bstr = atob(arr[1]);
    // let n = bstr.length;
    // let uint8Array = new Uint8Array(n);
    // while (n--) {
    //   uint8Array[n] = bstr.charCodeAt(n);
    // }
    // console.info(uint8Array);

    canvas.toBlob(
      (blob) => {
        // const reader = new FileReader();
        // reader.addEventListener('loadend', () => {
        //   const arrayBuffer = reader.result;
        //   console.info(arrayBuffer);

        //   const blob = new Blob([arrayBuffer]);

        // });
        // reader.readAsArrayBuffer(blob);

        console.info(blob);

        this.src = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(blob)
        );
      },
      undefined,
      0.1
    );

    let blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => {
          console.info(b);
          resolve(b);
        },
        undefined,
        0.5
      );
    });
    let buf = await blob.arrayBuffer();
    let uint8Array = new Uint8Array(buf);

    const dv = new DataView(buf);

    console.info(uint8Array);
    console.info(dv.getUint8(0));

    console.info(ctx.getImageData(0, 0, width, height).data);
    // console.info(buf);
    // console.info(ctx.getImageData(0, 0, width, height).data.buffer);

    // for (let i = 0; i < canvdata.length; i += 4) {
    //   canvdata[i] = uint8Array[i];
    //   canvdata[i + 1] = uint8Array[i + 1];
    //   canvdata[i + 2] = uint8Array[i + 2];
    //   canvdata[i + 3] = uint8Array[i + 3];
    // }

    // console.info(imageData);

    // ctx.putImageData(imageData, 0, 0);

    // console.info(blob);
    // console.info(blob.slice(0, blob.size));
    // console.info(buf);
  }
}
