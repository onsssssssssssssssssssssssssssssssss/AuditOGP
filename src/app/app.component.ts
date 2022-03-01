import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private el: ElementRef, private renderer:Renderer2){}

  ngAfterViewInit(){

this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#F6F7FC');

}
}