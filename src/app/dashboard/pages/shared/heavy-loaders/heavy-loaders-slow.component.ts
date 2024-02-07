import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1 [ngClass]="['w-full h-[100px]',cssClass]" >{{ title }}</h1>
  `
})
export  default  class HeavyLoadersSlowComponent {
  @Input({required:true}) cssClass! : string;
  @Input({required:true}) title! : string;
  constructor(){

    const startDate = Date.now();
    while (Date.now() -startDate < 3000  ){
      console.log('Inside Component very slow Loaded!');

    }

  }

}
