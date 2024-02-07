import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full h-50', cssClass]">
    <ng-content/>
  </section>
  `
})
export default class HeavyLoadersFastComponent {
  @Input({required: true}) cssClass! :string;

}
